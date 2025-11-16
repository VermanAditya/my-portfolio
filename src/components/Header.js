import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import useScroll from '../hooks/useScroll';
import { PORTFOLIO } from '../config/portfolio';
export default function Header({ onNavigate }) {
    const scrolled = useScroll(50);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    const buttons = ['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'];
    return (_jsxs("nav", { style: { position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: scrolled ? `${PORTFOLIO.theme.surface}ee` : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', borderBottom: scrolled ? `1px solid ${PORTFOLIO.theme.primary}33` : 'none', transition: 'all 0.3s' }, children: [_jsxs("div", { style: { maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsx("h1", { style: { fontSize: '1.5rem', fontWeight: 'bold', background: PORTFOLIO.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }, children: PORTFOLIO.personal.name.split(' ')[0] }), _jsx("div", { style: { display: 'flex', gap: '2rem' }, className: 'desktop-menu', children: buttons.map(b => _jsx("button", { onClick: () => onNavigate(b.toLowerCase()), style: { background: 'none', border: 'none', color: PORTFOLIO.theme.text, cursor: 'pointer', fontSize: 14, fontWeight: 500 }, children: b }, b)) }), _jsx("div", { style: { display: 'flex', gap: 12, alignItems: 'center' }, children: _jsx("button", { style: { background: 'none', border: 'none', color: PORTFOLIO.theme.text, display: 'none' }, onClick: () => setIsOpen(s => !s), "aria-label": 'menu', children: isOpen ? _jsx(X, { size: 20 }) : _jsx(Menu, { size: 20 }) }) })] }), isOpen && _jsx("div", { style: { backgroundColor: PORTFOLIO.theme.surface, padding: 12 }, className: 'mobile-menu', children: buttons.map(b => _jsx("button", { onClick: () => { onNavigate(b.toLowerCase()); setIsOpen(false); }, style: { display: 'block', width: '100%', textAlign: 'left', padding: 10, background: 'none', border: 'none', color: PORTFOLIO.theme.text }, children: b }, b)) })] }));
}
