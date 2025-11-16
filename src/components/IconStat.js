import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function IconStat({ Icon, value, label, theme }) {
    return (_jsxs("div", { style: { padding: '2rem', backgroundColor: theme.background, borderRadius: 12, textAlign: 'center', border: `1px solid ${theme.primary}33`, transition: 'transform 0.3s' }, onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-5px)', onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)', children: [_jsx(Icon, { size: 40, style: { color: theme.primary, margin: '0 auto 1rem' } }), _jsx("div", { style: { fontSize: '2.5rem', fontWeight: 'bold', color: theme.primary, marginBottom: 8 }, children: value }), _jsx("div", { style: { color: theme.textMuted }, children: label })] }));
}
