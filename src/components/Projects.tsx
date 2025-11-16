import React, { useState, useMemo } from 'react';
import ProjectModal from './ProjectModal';
import { PORTFOLIO } from '../config/portfolio';


const SAMPLE_PROJECTS = [
{ id: 'p1', title: 'Realtime Chat App', description: 'A chat app built with Socket.IO and React.', tech: ['React', 'Socket.IO', 'Node.js'], link: '#' },
{ id: 'p2', title: 'E‑commerce Platform', description: 'A microservices-based e-commerce backend.', tech: ['Node.js', 'Postgres', 'Docker'], link: '#' },
];


export default function Projects() {
const [active, setActive] = useState<any | null>(null);
const projects = useMemo(() => SAMPLE_PROJECTS, []);


return (
<section id='projects' style={{ padding: '6rem 2rem' }}>
<div style={{ maxWidth: 1200, margin: '0 auto' }}>
<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', background: PORTFOLIO.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</h2>


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
{projects.map(p => (
<div key={p.id} style={{ padding: '1.25rem', background: PORTFOLIO.theme.surface, borderRadius: 12, border: `1px solid ${PORTFOLIO.theme.primary}33` }}>
<h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: PORTFOLIO.theme.primary }}>{p.title}</h3>
<p style={{ color: PORTFOLIO.theme.textMuted, marginTop: 6 }}>{p.description}</p>
<div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>{p.tech.map((t: string) => <span key={t} style={{ padding: '0.25rem 0.5rem', background: PORTFOLIO.theme.background, borderRadius: 6, color: PORTFOLIO.theme.text, fontSize: 12 }}>{t}</span>)}</div>
<div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
<button onClick={() => setActive(p)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, background: PORTFOLIO.theme.primary, color: '#fff', border: 'none' }}>Details</button>
{p.link && <a href={p.link} target='_blank' rel='noreferrer' style={{ padding: '0.5rem 0.75rem', borderRadius: 8, border: `1px solid ${PORTFOLIO.theme.primary}33`, color: PORTFOLIO.theme.text }}>Live</a>}
</div>
</div>
))}
</div>


{active && <ProjectModal project={active} onClose={() => setActive(null)} />}
</div>
</section>
);
}