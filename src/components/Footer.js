import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { PORTFOLIO } from '../config/portfolio';
export default function Footer() {
    const theme = PORTFOLIO.theme;
    return (_jsx("footer", { style: { padding: 16, textAlign: 'center', borderTop: `1px solid ${theme.primary}33` }, children: _jsxs("p", { style: { color: theme.textMuted, margin: 0 }, children: ["\u00A9 ", new Date().getFullYear(), " ", PORTFOLIO.personal.name, ". All Rights Reserved."] }) }));
}
