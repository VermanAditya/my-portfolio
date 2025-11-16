import React from 'react';
import { PORTFOLIO } from '../config/portfolio';


export default function Footer() {
const theme = PORTFOLIO.theme;
return (
<footer style={{ padding: 16, textAlign: 'center', borderTop: `1px solid ${theme.primary}33` }}>
<p style={{ color: theme.textMuted, margin: 0 }}>© {new Date().getFullYear()} {PORTFOLIO.personal.name}. All Rights Reserved.</p>
</footer>
);
}