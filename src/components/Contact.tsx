import React from 'react';
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO } from '../config/portfolio';


export default function Contact() {
const theme = PORTFOLIO.theme;
return (
<section id='contact' style={{ padding: '6rem 2rem', backgroundColor: theme.surface }}>
<div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Connect</h2>
<p style={{ fontSize: '1.1rem', color: theme.textMuted, marginBottom: '3rem', lineHeight: 1.8 }}>I'm always interested in hearing about new projects and opportunities.</p>


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: '3rem' }}>
<a href={`mailto:${PORTFOLIO.personal.email}`} style={{ padding: 16, backgroundColor: theme.background, borderRadius: 12, border: `1px solid ${theme.primary}33`, textDecoration: 'none', color: theme.text }}>
<Mail size={28} style={{ color: theme.primary }} />
<div style={{ fontWeight: '600', marginTop: 8 }}>Email</div>
<div style={{ color: theme.textMuted, marginTop: 4 }}>{PORTFOLIO.personal.email}</div>
</a>
<a href={`tel:${PORTFOLIO.personal.phone}`} style={{ padding: 16, backgroundColor: theme.background, borderRadius: 12, border: `1px solid ${theme.primary}33`, textDecoration: 'none', color: theme.text }}>
<Phone size={28} style={{ color: theme.primary }} />
<div style={{ fontWeight: '600', marginTop: 8 }}>Phone</div>
<div style={{ color: theme.textMuted, marginTop: 4 }}>{PORTFOLIO.personal.phone}</div>
</a>
<a href={`https://${PORTFOLIO.personal.linkedin}`} target='_blank' rel='noreferrer' style={{ padding: 16, backgroundColor: theme.background, borderRadius: 12, border: `1px solid ${theme.primary}33`, textDecoration: 'none', color: theme.text }}>
<Linkedin size={28} style={{ color: theme.primary }} />
<div style={{ fontWeight: '600', marginTop: 8 }}>LinkedIn</div>
<div style={{ color: theme.textMuted, marginTop: 4 }}>Connect <ExternalLink size={14} /></div>
</a>
</div>


<div style={{ padding: 16, background: theme.background, borderRadius: 12, border: `1px solid ${theme.primary}33` }}>
<MapPin size={20} style={{ color: theme.primary }} />
<p style={{ color: theme.textMuted, marginTop: 8 }}>{PORTFOLIO.personal.location}</p>
</div>


<div style={{ marginTop: 16 }}>
<a href='/resume.pdf' download style={{ padding: '0.5rem 0.75rem', borderRadius: 8, background: PORTFOLIO.theme.primary, color: '#fff', textDecoration: 'none' }}>Download Résumé</a>
</div>
</div>
</section>
);
}