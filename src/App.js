import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
    const scrollToSection = useCallback((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return (_jsxs("div", { children: [_jsx(Header, { onNavigate: scrollToSection }), _jsx(Hero, { onScrollTo: scrollToSection }), _jsx(About, {}), _jsx(Experience, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
