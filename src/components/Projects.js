import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import ProjectModal from './ProjectModal';
import { PORTFOLIO } from '../config/portfolio';
const SAMPLE_PROJECTS = [
    { id: 'p1', title: 'Realtime Chat App', description: 'A chat app built with Socket.IO and React.', tech: ['React', 'Socket.IO', 'Node.js'], link: '#' },
    { id: 'p2', title: 'E‑commerce Platform', description: 'A microservices-based e-commerce backend.', tech: ['Node.js', 'Postgres', 'Docker'], link: '#' },
];
export default function Projects() {
    const [active, setActive] = useState(null);
    const projects = useMemo(() => SAMPLE_PROJECTS, []);
    return (_jsx("section", { id: 'projects', style: { padding: '6rem 2rem' }, children: _jsxs("div", { style: { maxWidth: 1200, margin: '0 auto' }, children: [_jsx("h2", { style: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', background: PORTFOLIO.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }, children: "Projects" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }, children: projects.map(p => (_jsxs("div", { style: { padding: '1.25rem', background: PORTFOLIO.theme.surface, borderRadius: 12, border: `1px solid ${PORTFOLIO.theme.primary}33` }, children: [_jsx("h3", { style: { fontSize: '1.25rem', fontWeight: 'bold', color: PORTFOLIO.theme.primary }, children: p.title }), _jsx("p", { style: { color: PORTFOLIO.theme.textMuted, marginTop: 6 }, children: p.description }), _jsx("div", { style: { marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }, children: p.tech.map((t) => _jsx("span", { style: { padding: '0.25rem 0.5rem', background: PORTFOLIO.theme.background, borderRadius: 6, color: PORTFOLIO.theme.text, fontSize: 12 }, children: t }, t)) }), _jsxs("div", { style: { marginTop: 12, display: 'flex', gap: 8 }, children: [_jsx("button", { onClick: () => setActive(p), style: { padding: '0.5rem 0.75rem', borderRadius: 8, background: PORTFOLIO.theme.primary, color: '#fff', border: 'none' }, children: "Details" }), p.link && _jsx("a", { href: p.link, target: '_blank', rel: 'noreferrer', style: { padding: '0.5rem 0.75rem', borderRadius: 8, border: `1px solid ${PORTFOLIO.theme.primary}33`, color: PORTFOLIO.theme.text }, children: "Live" })] })] }, p.id))) }), active && _jsx(ProjectModal, { project: active, onClose: () => setActive(null) })] }) }));
}
