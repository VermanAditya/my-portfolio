import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PORTFOLIO } from '../config/portfolio';
const TESTIMONIALS = [
    { id: 't1', name: 'Rohit Sharma', text: 'Aditya delivered a great system quickly and drove the architecture decisions.' },
    { id: 't2', name: 'Priya Mehra', text: 'Very reliable and detail-oriented engineer.' },
];
export default function Testimonials() {
    const theme = PORTFOLIO.theme;
    return (_jsx("section", { id: 'testimonials', style: { padding: '6rem 2rem', backgroundColor: theme.background }, children: _jsxs("div", { style: { maxWidth: 1200, margin: '0 auto' }, children: [_jsx("h2", { style: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }, children: "Testimonials" }), _jsx("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12 }, children: TESTIMONIALS.map(t => (_jsxs("div", { style: { padding: 16, background: theme.surface, borderRadius: 8, border: `1px solid ${theme.primary}33` }, children: [_jsxs("p", { style: { color: theme.textMuted }, children: ["\"", t.text, "\""] }), _jsx("div", { style: { marginTop: 8, fontWeight: 'bold', color: theme.primary }, children: t.name })] }, t.id))) })] }) }));
}
