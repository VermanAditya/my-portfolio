import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PORTFOLIO } from '../config/portfolio';
export default function BlogList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const modules = import.meta.glob('../content/posts/*.md', { as: 'raw' });
        (async () => {
            const entries = Object.entries(modules);
            const loaded = await Promise.all(entries.map(async ([path, resolver]) => {
                const raw = await resolver();
                const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
                let meta = {};
                let content = raw;
                if (fmMatch) {
                    const fm = fmMatch[1];
                    fm.split('\n').forEach(line => {
                        const [k, ...rest] = line.split(':');
                        meta[k.trim()] = rest.join(':').trim().replace(/^\"|\"$/g, '');
                    });
                    content = raw.replace(/^---\n([\s\S]*?)\n---/, '').trim();
                }
                return { slug: path.split('/').pop().replace(/\.md$/, ''), meta, content };
            }));
            setPosts(loaded);
        })();
    }, []);
    return (_jsx("section", { id: 'blog', style: { padding: '6rem 2rem', backgroundColor: '#0b1220' }, children: _jsxs("div", { style: { maxWidth: 1200, margin: '0 auto' }, children: [_jsx("h2", { style: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#c7b3ff' }, children: "Blog" }), _jsx("div", { style: { display: 'grid', gap: 12 }, children: posts.length === 0 ? _jsx("p", { style: { color: '#94a3b8' }, children: "No posts yet." }) : posts.map(p => (_jsxs("article", { style: { padding: 16, background: '#071228', borderRadius: 8, border: `1px solid ${PORTFOLIO.theme.primary}33` }, children: [_jsx("h3", { style: { color: PORTFOLIO.theme.primary }, children: p.meta.title || p.slug }), _jsx("small", { style: { color: PORTFOLIO.theme.textMuted }, children: p.meta.date }), _jsx("div", { style: { marginTop: 8, color: PORTFOLIO.theme.text }, children: _jsx(ReactMarkdown, { children: p.content.slice(0, 300) }) })] }, p.slug))) })] }) }));
}
