import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../config/portfolio';


export default function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
return (
<div style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} onClick={onClose} />
<motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} style={{ position: 'relative', zIndex: 70, maxWidth: 900, width: '90%', background: PORTFOLIO.theme.surface, padding: 20, borderRadius: 12, border: `1px solid ${PORTFOLIO.theme.primary}33` }}>
<h3 style={{ fontSize: 20, fontWeight: 'bold', color: PORTFOLIO.theme.primary }}>{project.title}</h3>
<p style={{ color: PORTFOLIO.theme.textMuted }}>{project.description}</p>
<div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>{project.tech.map((t: string) => <span key={t} style={{ padding: '0.25rem 0.5rem', background: PORTFOLIO.theme.background, borderRadius: 6 }}>{t}</span>)}</div>
<div style={{ marginTop: 16, textAlign: 'right' }}><button onClick={onClose} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, background: 'transparent', border: `1px solid ${PORTFOLIO.theme.primary}33`, color: PORTFOLIO.theme.text }}>Close</button></div>
</motion.div>
</div>
);
}