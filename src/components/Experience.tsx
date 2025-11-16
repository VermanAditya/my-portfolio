import React from 'react';
import { MapPin } from 'lucide-react';
import { PORTFOLIO } from '../config/portfolio';


export default function Experience() {
const theme = PORTFOLIO.theme;
return (
<section id='experience' style={{ padding: '6rem 2rem' }}>
<div style={{ maxWidth: 1200, margin: '0 auto' }}>
<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work Experience</h2>


<div style={{ position: 'relative' }}>
<div className='timeline-line' style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: theme.gradient }} />


{PORTFOLIO.experience.map((job, i) => (
<div key={i} className='experience-item' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem', position: 'relative' }}>
<div className='timeline-dot' style={{ position: 'absolute', left: '50%', top: '2rem', transform: 'translateX(-50%)', width: 20, height: 20, borderRadius: '50%', background: job.current ? theme.gradient : theme.surface, border: `3px solid ${theme.primary}`, zIndex: 2 }} />


<div className='experience-content' style={{ textAlign: i % 2 === 0 ? 'right' : 'left', order: i % 2 === 0 ? 1 : 2 }}>
<div style={{ padding: '2rem', backgroundColor: theme.surface, borderRadius: 12, border: `1px solid ${theme.primary}33`, transition: 'all 0.3s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = theme.primary; }} onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.borderColor = `${theme.primary}33`; }}>
{job.current && <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: theme.gradient, borderRadius: 20, fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>CURRENT</span>}
<h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: theme.primary }}>{job.role}</h3>
<h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{job.company}</h4>
<p style={{ color: theme.textMuted, marginBottom: '0.5rem' }}><MapPin size={16} style={{ display: 'inline', marginRight: 6 }} />{job.location}</p>
<p style={{ color: theme.textMuted, marginBottom: '1rem', fontSize: '0.9rem' }}>{job.duration}</p>
<ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>{job.description.map((desc, j) => <li key={j} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative', color: theme.textMuted, lineHeight: 1.6 }}><span style={{ position: 'absolute', left: 0, color: theme.primary }}>▸</span>{desc}</li>)}</ul>
</div>
</div>


<div style={{ order: i % 2 === 0 ? 2 : 1 }} />
</div>
))}
</div>
</div>
</section>
);
}