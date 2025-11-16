import React from 'react';
import IconStat from './IconStat';
import { Award, Code, Briefcase } from 'lucide-react';
import { PORTFOLIO } from '../config/portfolio';


export default function About() {
const theme = PORTFOLIO.theme;
return (
<section id='about' style={{ padding: '6rem 2rem', backgroundColor: theme.surface }}>
<div style={{ maxWidth: 1200, margin: '0 auto' }}>
<h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Me</h2>


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
<IconStat Icon={Award} value={PORTFOLIO.about.yearsOfExperience} label='Years of Experience' theme={theme} />
<IconStat Icon={Code} value={PORTFOLIO.about.projectsCompleted} label='Projects Completed' theme={theme} />
<IconStat Icon={Briefcase} value={PORTFOLIO.about.technologiesMastered} label='Technologies' theme={theme} />
</div>


<p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: theme.textMuted, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>{PORTFOLIO.about.summary}</p>
</div>
</section>
);
}