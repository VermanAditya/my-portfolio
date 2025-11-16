import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconStat from './IconStat';
import { Award, Code, Briefcase } from 'lucide-react';
import { PORTFOLIO } from '../config/portfolio';
export default function About() {
    const theme = PORTFOLIO.theme;
    return (_jsx("section", { id: 'about', style: { padding: '6rem 2rem', backgroundColor: theme.surface }, children: _jsxs("div", { style: { maxWidth: 1200, margin: '0 auto' }, children: [_jsx("h2", { style: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }, children: "About Me" }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }, children: [_jsx(IconStat, { Icon: Award, value: PORTFOLIO.about.yearsOfExperience, label: 'Years of Experience', theme: theme }), _jsx(IconStat, { Icon: Code, value: PORTFOLIO.about.projectsCompleted, label: 'Projects Completed', theme: theme }), _jsx(IconStat, { Icon: Briefcase, value: PORTFOLIO.about.technologiesMastered, label: 'Technologies', theme: theme })] }), _jsx("p", { style: { fontSize: '1.1rem', lineHeight: 1.8, color: theme.textMuted, maxWidth: 900, margin: '0 auto', textAlign: 'center' }, children: PORTFOLIO.about.summary })] }) }));
}
