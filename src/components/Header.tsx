import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useScroll from '../hooks/useScroll';
import { PORTFOLIO } from '../config/portfolio';


export default function Header({ onNavigate }: { onNavigate: (id: string) => void }) {
const scrolled = useScroll(50);
const [isOpen, setIsOpen] = useState(false);
const [theme, setTheme] = useState<'dark'|'light'>(() => (localStorage.getItem('theme') as 'dark'|'light') || 'dark');


useEffect(() => {
document.documentElement.classList.toggle('dark', theme === 'dark');
localStorage.setItem('theme', theme);
}, [theme]);


const buttons = ['Home','About','Experience','Skills','Education','Contact'];


return (
<nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: scrolled ? `${PORTFOLIO.theme.surface}ee` : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', borderBottom: scrolled ? `1px solid ${PORTFOLIO.theme.primary}33` : 'none', transition: 'all 0.3s' }}>
<div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', background: PORTFOLIO.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>{PORTFOLIO.personal.name.split(' ')[0]}</h1>


<div style={{ display: 'flex', gap: '2rem' }} className='desktop-menu'>
{buttons.map(b => <button key={b} onClick={() => onNavigate(b.toLowerCase())} style={{ background: 'none', border: 'none', color: PORTFOLIO.theme.text, cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>{b}</button>)}
</div>


<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
{/* <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} style={{ padding: 6, borderRadius: 8, border: `1px solid ${PORTFOLIO.theme.primary}33`, background: 'transparent' }} aria-label='toggle theme'>
{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
</button> */}


<button style={{ background: 'none', border: 'none', color: PORTFOLIO.theme.text, display: 'none' }} onClick={() => setIsOpen(s => !s)} aria-label='menu'>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
</div>
</div>


{isOpen && <div style={{ backgroundColor: PORTFOLIO.theme.surface, padding: 12 }} className='mobile-menu'>{buttons.map(b => <button key={b} onClick={() => { onNavigate(b.toLowerCase()); setIsOpen(false); }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: 10, background: 'none', border: 'none', color: PORTFOLIO.theme.text }}>{b}</button>)}</div>}
</nav>
);
}