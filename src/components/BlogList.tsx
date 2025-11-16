import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PORTFOLIO } from '../config/portfolio';


export default function BlogList() {
const [posts, setPosts] = useState<any[]>([]);


useEffect(() => {
const modules = import.meta.glob('../content/posts/*.md', { as: 'raw' });
(async () => {
const entries = Object.entries(modules);
const loaded = await Promise.all(entries.map(async ([path, resolver]) => {
const raw = await (resolver as () => Promise<string>)();
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
let meta: any = {};
let content = raw;
if (fmMatch) {
const fm = fmMatch[1];
fm.split('\n').forEach(line => {
const [k, ...rest] = line.split(':');
meta[k.trim()] = rest.join(':').trim().replace(/^\"|\"$/g, '');
});
content = raw.replace(/^---\n([\s\S]*?)\n---/, '').trim();
}
return { slug: path.split('/').pop()!.replace(/\.md$/, ''), meta, content };
}));
setPosts(loaded);
})();
}, []);


return (
<section id='blog' style={{ padding: '6rem 2rem', backgroundColor: '#0b1220' }}>
<div style={{ maxWidth: 1200, margin: '0 auto' }}>
<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#c7b3ff' }}>Blog</h2>
<div style={{ display: 'grid', gap: 12 }}>
{posts.length === 0 ? <p style={{ color: '#94a3b8' }}>No posts yet.</p> : posts.map(p => (
<article key={p.slug} style={{ padding: 16, background: '#071228', borderRadius: 8, border: `1px solid ${PORTFOLIO.theme.primary}33` }}>
<h3 style={{ color: PORTFOLIO.theme.primary }}>{p.meta.title || p.slug}</h3>
<small style={{ color: PORTFOLIO.theme.textMuted }}>{p.meta.date}</small>
<div style={{ marginTop: 8, color: PORTFOLIO.theme.text }}><ReactMarkdown>{p.content.slice(0, 300)}</ReactMarkdown></div>
</article>
))}
</div>
</div>
</section>
);
}