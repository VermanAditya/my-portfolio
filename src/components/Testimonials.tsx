import React from 'react';
import { PORTFOLIO } from '../config/portfolio';


const TESTIMONIALS = [
{ id: 't1', name: 'Rohit Sharma', text: 'Aditya delivered a great system quickly and drove the architecture decisions.' },
{ id: 't2', name: 'Priya Mehra', text: 'Very reliable and detail-oriented engineer.' },
];


export default function Testimonials() {
const theme = PORTFOLIO.theme;
return (
<section id='testimonials' style={{ padding: '6rem 2rem', backgroundColor: theme.background }}>
<div style={{ maxWidth: 1200, margin: '0 auto' }}>
<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonials</h2>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12 }}>
{TESTIMONIALS.map(t => (
<div key={t.id} style={{ padding: 16, background: theme.surface, borderRadius: 8, border: `1px solid ${theme.primary}33` }}>
<p style={{ color: theme.textMuted }}>&quot;{t.text}&quot;</p>
<div style={{ marginTop: 8, fontWeight: 'bold', color: theme.primary }}>{t.name}</div>
</div>
))}
</div>
</div>
</section>
);
}