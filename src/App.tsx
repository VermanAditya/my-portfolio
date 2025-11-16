import React, { useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import BlogList from './components/BlogList';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
const scrollToSection = useCallback((id: string) => {
document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}, []);


return (
<div>
<Header onNavigate={scrollToSection} />
<Hero onScrollTo={scrollToSection} />
<About />
<Experience />
<Projects />
{/* <Testimonials /> */}
{/* <BlogList /> */}
<Contact />
<Footer />
</div>
);
}



// // import React, { useState, useEffect } from 'react';
// // import { Mail, Phone, Linkedin, MapPin, Code, Briefcase, GraduationCap, Award, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

// // // ═══════════════════════════════════════════════════════════════
// // // 🎨 CUSTOMIZATION SECTION - EDIT THIS TO UPDATE YOUR PORTFOLIO
// // // ═══════════════════════════════════════════════════════════════

// // const PORTFOLIO_CONFIG = {
// //   personal: {
// //     name: "Aditya Verman",
// //     title: "Solution Engineer | Full-Stack Team Lead",
// //     tagline: "Building scalable solutions with modern technologies",
// //     location: "Indore, Madhya Pradesh, India",
// //     email: "adiitya821@gmail.com",
// //     phone: "7024202242",
// //     linkedin: "www.linkedin.com/in/aditya-verman-av062000",
// //     profileImage: "https://ui-avatars.com/api/?name=Aditya+Verman&size=400&background=6366f1&color=fff&bold=true",
// //   },

// //   theme: {
// //     primary: "#6366f1",
// //     secondary: "#8b5cf6",
// //     background: "#0f172a",
// //     surface: "#1e293b",
// //     text: "#f1f5f9",
// //     textMuted: "#94a3b8",
// //     gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// //   },

// //   about: {
// //     summary: "Goal-oriented Solution Engineer with 4+ years of experience in designing and developing scalable, high-performance applications. Adept in frontend and backend technologies including Angular, Node.js, Laravel, and JavaScript. Demonstrated success in enhancing system efficiency by up to 40%, leading teams, and delivering seamless user experiences.",
// //     yearsOfExperience: "4+",
// //     projectsCompleted: "50+",
// //     technologiesMastered: "20+",
// //   },

// //   skills: {
// //     frontend: ["React.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
// //     backend: ["Node.js", "Laravel", "Express.js", "REST APIs", "Microservices", "Socket.IO", "WebSocket"],
// //     database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
// //     tools: ["Docker", "CI/CD", "Git", "Cloud Computing", "MERN Stack"],
// //   },

// //   experience: [
// //     {
// //       company: "GAMMASTACK",
// //       role: "Solution Engineer",
// //       duration: "February 2024 - Present",
// //       location: "Indore, Madhya Pradesh, India",
// //       description: [
// //         "Performed in-depth code reviews to identify and resolve complex issues",
// //         "Optimized system performance and implemented scalable solutions",
// //         "Enhanced architecture, performance, and resource utilization",
// //       ],
// //       current: true,
// //     },
// //     {
// //       company: "MindCrew Technologies Pvt. Ltd.",
// //       role: "Full Stack Developer",
// //       duration: "January 2023 - February 2024",
// //       location: "Indore",
// //       description: [
// //         "Designed and maintained scalable web applications",
// //         "Optimized database queries and data management",
// //         "Ensured high performance and responsiveness",
// //       ],
// //       current: false,
// //     },
// //     {
// //       company: "Freelance",
// //       role: "Full-Stack Developer",
// //       duration: "October 2022 - January 2023",
// //       location: "Remote",
// //       description: [
// //         "Developed dynamic, responsive UI web pages",
// //         "Integrated third-party APIs and payment gateways",
// //         "Implemented SEO best practices",
// //       ],
// //       current: false,
// //     },
// //     {
// //       company: "Jmbliss IT Solutions",
// //       role: "Full-stack Developer",
// //       duration: "March 2021 - September 2022",
// //       location: "Indore, Madhya Pradesh, India",
// //       description: [
// //         "Collaborated with cross-functional teams",
// //         "Designed and integrated robust APIs",
// //         "Resolved technical issues efficiently",
// //       ],
// //       current: false,
// //     },
// //   ],

// //   education: [
// //     {
// //       institution: "Sage University Indore",
// //       degree: "Master of Computer Applications (MCA)",
// //       field: "Computer Science",
// //       duration: "July 2022 - June 2024",
// //     },
// //     {
// //       institution: "AKS University Satna",
// //       degree: "Bachelor of Computer Application (BCA)",
// //       field: "Computer Science",
// //       duration: "2018 - 2021",
// //     },
// //   ],
// // };

// // export default function Portfolio() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const scrollToSection = (id) => {
// //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// //     setIsMenuOpen(false);
// //   };

// //   const styles = {
// //     container: {
// //       backgroundColor: PORTFOLIO_CONFIG.theme.background,
// //       color: PORTFOLIO_CONFIG.theme.text,
// //       minHeight: '100vh',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <style>{`
// //         @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
// //         @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-10px); } }
// //         @media (max-width: 768px) {
// //           .desktop-menu { display: none !important; }
// //           .mobile-menu-btn { display: block !important; }
// //           .mobile-menu { display: block !important; }
// //           .timeline-line, .timeline-dot { display: none !important; }
// //           .experience-item { grid-template-columns: 1fr !important; }
// //           .experience-content { order: 1 !important; text-align: left !important; }
// //         }
// //       `}</style>

// //       <nav style={{
// //         position: 'fixed', top: 0, width: '100%', zIndex: 1000,
// //         backgroundColor: scrolled ? `${PORTFOLIO_CONFIG.theme.surface}ee` : 'transparent',
// //         backdropFilter: scrolled ? 'blur(10px)' : 'none',
// //         borderBottom: scrolled ? `1px solid ${PORTFOLIO_CONFIG.theme.primary}33` : 'none',
// //         transition: 'all 0.3s'
// //       }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //           <h1 style={{ 
// //             fontSize: '1.5rem', fontWeight: 'bold', background: PORTFOLIO_CONFIG.theme.gradient,
// //             WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0
// //           }}>{PORTFOLIO_CONFIG.personal.name.split(' ')[0]}</h1>
          
// //           <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
// //             {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map(item => (
// //               <button key={item} onClick={() => scrollToSection(item.toLowerCase())} style={{
// //                 background: 'none', border: 'none', color: PORTFOLIO_CONFIG.theme.text,
// //                 cursor: 'pointer', fontSize: '0.95rem', fontWeight: '500', transition: 'color 0.3s'
// //               }} onMouseEnter={e => e.target.style.color = PORTFOLIO_CONFIG.theme.primary}
// //               onMouseLeave={e => e.target.style.color = PORTFOLIO_CONFIG.theme.text}>{item}</button>
// //             ))}
// //           </div>

// //           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn"
// //             style={{ background: 'none', border: 'none', color: PORTFOLIO_CONFIG.theme.text, cursor: 'pointer', display: 'none' }}>
// //             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>

// //         {isMenuOpen && (
// //           <div className="mobile-menu" style={{ backgroundColor: PORTFOLIO_CONFIG.theme.surface, padding: '1rem', display: 'none' }}>
// //             {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map(item => (
// //               <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
// //                 style={{ background: 'none', border: 'none', color: PORTFOLIO_CONFIG.theme.text, cursor: 'pointer', fontSize: '1rem', padding: '0.75rem', width: '100%', textAlign: 'left' }}>
// //                 {item}
// //               </button>
// //             ))}
// //           </div>
// //         )}
// //       </nav>

// //       <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
// //         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
// //           background: `radial-gradient(circle at 20% 50%, ${PORTFOLIO_CONFIG.theme.primary}15 0%, transparent 50%)`, zIndex: 0 }} />
        
// //         <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', zIndex: 1 }}>
// //           <div style={{ width: '180px', height: '180px', borderRadius: '50%', margin: '0 auto 2rem',
// //             background: PORTFOLIO_CONFIG.theme.gradient, padding: '5px', animation: 'pulse 3s ease-in-out infinite' }}>
// //             <img src={PORTFOLIO_CONFIG.personal.profileImage} alt={PORTFOLIO_CONFIG.personal.name}
// //               style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${PORTFOLIO_CONFIG.theme.background}` }} />
// //           </div>
          
// //           <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem',
// //             background: PORTFOLIO_CONFIG.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
// //             {PORTFOLIO_CONFIG.personal.name}
// //           </h1>
          
// //           <p style={{ fontSize: '1.5rem', color: PORTFOLIO_CONFIG.theme.textMuted, marginBottom: '1rem', fontWeight: '500' }}>
// //             {PORTFOLIO_CONFIG.personal.title}
// //           </p>
          
// //           <p style={{ fontSize: '1.1rem', color: PORTFOLIO_CONFIG.theme.textMuted, maxWidth: '600px', margin: '0 auto 2rem' }}>
// //             {PORTFOLIO_CONFIG.personal.tagline}
// //           </p>

// //           <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
// //             <a href={`mailto:${PORTFOLIO_CONFIG.personal.email}`} style={{
// //               padding: '0.75rem 1.5rem', background: PORTFOLIO_CONFIG.theme.gradient, borderRadius: '8px',
// //               color: 'white', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
// //               fontWeight: '600', transition: 'transform 0.3s'
// //             }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
// //             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
// //               <Mail size={20} /> Get In Touch
// //             </a>
            
// //             <button onClick={() => scrollToSection('experience')} style={{
// //               padding: '0.75rem 1.5rem', background: 'transparent', border: `2px solid ${PORTFOLIO_CONFIG.theme.primary}`,
// //               borderRadius: '8px', color: PORTFOLIO_CONFIG.theme.primary, cursor: 'pointer', fontWeight: '600',
// //               display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s'
// //             }} onMouseEnter={e => { e.currentTarget.style.background = PORTFOLIO_CONFIG.theme.primary; e.currentTarget.style.color = 'white'; }}
// //             onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = PORTFOLIO_CONFIG.theme.primary; }}>
// //               <Briefcase size={20} /> View Work
// //             </button>
// //           </div>

// //           <a href={`https://${PORTFOLIO_CONFIG.personal.linkedin}`} target="_blank" rel="noopener noreferrer"
// //             style={{ color: PORTFOLIO_CONFIG.theme.textMuted, transition: 'color 0.3s', display: 'inline-block', marginTop: '2rem' }}
// //             onMouseEnter={e => e.currentTarget.style.color = PORTFOLIO_CONFIG.theme.primary}
// //             onMouseLeave={e => e.currentTarget.style.color = PORTFOLIO_CONFIG.theme.textMuted}>
// //             <Linkedin size={24} />
// //           </a>

// //           <ChevronDown size={32} style={{ position: 'absolute', bottom: '2rem', left: '50%',
// //             color: PORTFOLIO_CONFIG.theme.primary, animation: 'bounce 2s infinite', cursor: 'pointer' }}
// //             onClick={() => scrollToSection('about')} />
// //         </div>
// //       </section>

// //       <section id="about" style={{ padding: '6rem 2rem', backgroundColor: PORTFOLIO_CONFIG.theme.surface }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center',
// //             background: PORTFOLIO_CONFIG.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
// //             About Me
// //           </h2>

// //           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
// //             {[
// //               { label: 'Years of Experience', value: PORTFOLIO_CONFIG.about.yearsOfExperience, icon: Award },
// //               { label: 'Projects Completed', value: PORTFOLIO_CONFIG.about.projectsCompleted, icon: Code },
// //               { label: 'Technologies', value: PORTFOLIO_CONFIG.about.technologiesMastered, icon: Briefcase },
// //             ].map((stat, i) => (
// //               <div key={i} style={{ padding: '2rem', backgroundColor: PORTFOLIO_CONFIG.theme.background, borderRadius: '12px',
// //                 textAlign: 'center', border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33`, transition: 'transform 0.3s' }}
// //                 onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
// //                 onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
// //                 <stat.icon size={40} style={{ color: PORTFOLIO_CONFIG.theme.primary, margin: '0 auto 1rem' }} />
// //                 <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: PORTFOLIO_CONFIG.theme.primary, marginBottom: '0.5rem' }}>
// //                   {stat.value}
// //                 </div>
// //                 <div style={{ color: PORTFOLIO_CONFIG.theme.textMuted }}>{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>

// //           <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: PORTFOLIO_CONFIG.theme.textMuted, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
// //             {PORTFOLIO_CONFIG.about.summary}
// //           </p>
// //         </div>
// //       </section>

// //       <section id="experience" style={{ padding: '6rem 2rem' }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center',
// //             background: PORTFOLIO_CONFIG.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
// //             Work Experience
// //           </h2>

// //           <div style={{ position: 'relative' }}>
// //             <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: PORTFOLIO_CONFIG.theme.gradient }} />

// //             {PORTFOLIO_CONFIG.experience.map((job, i) => (
// //               <div key={i} className="experience-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem', position: 'relative' }}>
// //                 <div className="timeline-dot" style={{ position: 'absolute', left: '50%', top: '2rem', transform: 'translateX(-50%)',
// //                   width: '20px', height: '20px', borderRadius: '50%',
// //                   background: job.current ? PORTFOLIO_CONFIG.theme.gradient : PORTFOLIO_CONFIG.theme.surface,
// //                   border: `3px solid ${PORTFOLIO_CONFIG.theme.primary}`, zIndex: 2 }} />

// //                 <div className="experience-content" style={{ textAlign: i % 2 === 0 ? 'right' : 'left', order: i % 2 === 0 ? 1 : 2 }}>
// //                   <div style={{ padding: '2rem', backgroundColor: PORTFOLIO_CONFIG.theme.surface, borderRadius: '12px',
// //                     border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33`, transition: 'all 0.3s' }}
// //                     onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = PORTFOLIO_CONFIG.theme.primary; }}
// //                     onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${PORTFOLIO_CONFIG.theme.primary}33`; }}>
// //                     {job.current && (
// //                       <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: PORTFOLIO_CONFIG.theme.gradient,
// //                         borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>CURRENT</span>
// //                     )}
// //                     <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: PORTFOLIO_CONFIG.theme.primary }}>{job.role}</h3>
// //                     <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{job.company}</h4>
// //                     <p style={{ color: PORTFOLIO_CONFIG.theme.textMuted, marginBottom: '0.5rem' }}>
// //                       <MapPin size={16} style={{ display: 'inline', marginRight: '0.25rem' }} />{job.location}
// //                     </p>
// //                     <p style={{ color: PORTFOLIO_CONFIG.theme.textMuted, marginBottom: '1rem', fontSize: '0.9rem' }}>{job.duration}</p>
// //                     <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
// //                       {job.description.map((desc, j) => (
// //                         <li key={j} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative',
// //                           color: PORTFOLIO_CONFIG.theme.textMuted, lineHeight: '1.6' }}>
// //                           <span style={{ position: 'absolute', left: 0, color: PORTFOLIO_CONFIG.theme.primary }}>▸</span>
// //                           {desc}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //                 <div style={{ order: i % 2 === 0 ? 2 : 1 }} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section id="skills" style={{ padding: '6rem 2rem', backgroundColor: PORTFOLIO_CONFIG.theme.surface }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center',
// //             background: PORTFOLIO_CONFIG.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
// //             Technical Skills
// //           </h2>

// //           <div style={{ display: 'grid', gap: '2rem' }}>
// //             {Object.entries(PORTFOLIO_CONFIG.skills).map(([category, skillList]) => (
// //               <div key={category} style={{ padding: '2rem', backgroundColor: PORTFOLIO_CONFIG.theme.background,
// //                 borderRadius: '12px', border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33` }}>
// //                 <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem',
// //                   color: PORTFOLIO_CONFIG.theme.primary, textTransform: 'capitalize' }}>{category}</h3>
// //                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
// //                   {skillList.map((skill, i) => (
// //                     <span key={i} style={{ padding: '0.5rem 1rem', backgroundColor: PORTFOLIO_CONFIG.theme.surface,
// //                       borderRadius: '8px', border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}66`,
// //                       color: PORTFOLIO_CONFIG.theme.text, fontSize: '0.9rem', transition: 'all 0.3s', cursor: 'default' }}
// //                       onMouseEnter={e => { e.currentTarget.style.background = PORTFOLIO_CONFIG.theme.gradient; e.currentTarget.style.transform = 'translateY(-2px)'; }}
// //                       onMouseLeave={e => { e.currentTarget.style.background = PORTFOLIO_CONFIG.theme.surface; e.currentTarget.style.transform = 'translateY(0)'; }}>
// //                       {skill}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section id="education" style={{ padding: '6rem 2rem' }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
// //           <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center',
// //             background: PORTFOLIO_CONFIG.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
// //             Education
// //           </h2>

// //           <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
// //             {PORTFOLIO_CONFIG.education.map((edu, i) => (
// //               <div key={i} style={{ padding: '2rem', backgroundColor: PORTFOLIO_CONFIG.theme.surface, borderRadius: '12px',
// //                 border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33`, transition: 'all 0.3s' }}
// //                 onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = PORTFOLIO_CONFIG.theme.primary; }}
// //                 onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${PORTFOLIO_CONFIG.theme.primary}33`; }}>
// //                 <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
// //                   <GraduationCap size={40} style={{ color: PORTFOLIO_CONFIG.theme.primary, flexShrink: 0 }} />
// //                   <div>
// //                     <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{edu.degree}</h3>
// //                     <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: PORTFOLIO_CONFIG.theme.primary }}>{edu.institution}</h4>
// //                     <p style={{ color: PORTFOLIO_CONFIG.theme.textMuted, marginBottom: '0.25rem' }}>{edu.field}</p>
// //                     <p style={{ color: PORTFOLIO_CONFIG.theme.textMuted, fontSize: '0.9rem' }}>{edu.duration}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section id="contact" style={{ padding: '6rem 2rem', backgroundColor: PORTFOLIO_CONFIG.theme.surface }}>
// //         <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
// //           <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem',
// //             background: PORTFOLIO_CONFIG.theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
// //             Let's Connect
// //           </h2>
          
// //           <p style={{ fontSize: '1.1rem', color: PORTFOLIO_CONFIG.theme.textMuted, marginBottom: '3rem', lineHeight: '1.8' }}>
// //             I'm always interested in hearing about new projects and opportunities.
// //           </p>

// //           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
// //             <a href={`mailto:${PORTFOLIO_CONFIG.personal.email}`} style={{
// //               padding: '1.5rem', backgroundColor: PORTFOLIO_CONFIG.theme.background, borderRadius: '12px',
// //               border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33`, textDecoration: 'none',
// //               color: PORTFOLIO_CONFIG.theme.text, transition: 'all 0.3s', display: 'flex',
// //               flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
// //               onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = PORTFOLIO_CONFIG.theme.primary; }}
// //               onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${PORTFOLIO_CONFIG.theme.primary}33`; }}>
// //               <Mail size={32} style={{ color: PORTFOLIO_CONFIG.theme.primary }} />
// //               <span style={{ fontWeight: '600' }}>Email</span>
// //               <span style={{ fontSize: '0.9rem', color: PORTFOLIO_CONFIG.theme.textMuted, wordBreak: 'break-all' }}>
// //                 {PORTFOLIO_CONFIG.personal.email}
// //               </span>
// //             </a>

// //             <a href={`tel:${PORTFOLIO_CONFIG.personal.phone}`} style={{
// //               padding: '1.5rem', backgroundColor: PORTFOLIO_CONFIG.theme.background, borderRadius: '12px',
// //               border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33`, textDecoration: 'none',
// //               color: PORTFOLIO_CONFIG.theme.text, transition: 'all 0.3s', display: 'flex',
// //               flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
// //               onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = PORTFOLIO_CONFIG.theme.primary; }}
// //               onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${PORTFOLIO_CONFIG.theme.primary}33`; }}>
// //               <Phone size={32} style={{ color: PORTFOLIO_CONFIG.theme.primary }} />
// //               <span style={{ fontWeight: '600' }}>Phone</span>
// //               <span style={{ fontSize: '0.9rem', color: PORTFOLIO_CONFIG.theme.textMuted }}>{PORTFOLIO_CONFIG.personal.phone}</span>
// //             </a>

// //             <a href={`https://${PORTFOLIO_CONFIG.personal.linkedin}`} target="_blank" rel="noopener noreferrer" style={{
// //               padding: '1.5rem', backgroundColor: PORTFOLIO_CONFIG.theme.background, borderRadius: '12px',
// //               border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33`, textDecoration: 'none',
// //               color: PORTFOLIO_CONFIG.theme.text, transition: 'all 0.3s', display: 'flex',
// //               flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
// //               onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = PORTFOLIO_CONFIG.theme.primary; }}
// //               onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = `${PORTFOLIO_CONFIG.theme.primary}33`; }}>
// //               <Linkedin size={32} style={{ color: PORTFOLIO_CONFIG.theme.primary }} />
// //               <span style={{ fontWeight: '600' }}>LinkedIn</span>
// //               <span style={{ fontSize: '0.9rem', color: PORTFOLIO_CONFIG.theme.textMuted, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
// //                 Connect <ExternalLink size={14} />
// //               </span>
// //             </a>
// //           </div>

// //           <div style={{ padding: '1.5rem', backgroundColor: PORTFOLIO_CONFIG.theme.background, borderRadius: '12px',
// //             border: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33` }}>
// //             <MapPin size={24} style={{ color: PORTFOLIO_CONFIG.theme.primary, margin: '0 auto 0.5rem' }} />
// //             <p style={{ color: PORTFOLIO_CONFIG.theme.textMuted, margin: 0 }}>{PORTFOLIO_CONFIG.personal.location}</p>
// //           </div>
// //         </div>
// //       </section>

// //       <footer style={{ padding: '2rem', textAlign: 'center', borderTop: `1px solid ${PORTFOLIO_CONFIG.theme.primary}33` }}>
// //         <p style={{ color: PORTFOLIO_CONFIG.theme.textMuted, margin: 0 }}>
// //           © {new Date().getFullYear()} {PORTFOLIO_CONFIG.personal.name}. Built with React.
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // }


// // src/App.tsx
// import type { MouseEvent } from "react";
// import { useCallback, useEffect, useMemo, useState } from "react";
// import {
//   Mail,
//   Phone,
//   Linkedin,
//   MapPin,
//   Code,
//   Briefcase,
//   GraduationCap,
//   Award,
//   ChevronDown,
//   Menu,
//   X,
//   ExternalLink,
// } from "lucide-react";

// /**
//  * Single-file optimized version of your original Portfolio component.
//  * - Keeps exact visual design and layout.
//  * - Fixes TypeScript typing issues.
//  * - Keeps all content/config in-place for easy review.
//  *
//  * After you confirm this looks identical to your screenshot, I'll split it into separate files.
//  */

// /* -------------------------
//    PORTFOLIO CONFIG (immutable)
//    ------------------------- */
// const PORTFOLIO_CONFIG = {
//   personal: {
//     name: "Aditya Verman",
//     title: "Solution Engineer | Full-Stack Team Lead",
//     tagline: "Building scalable solutions with modern technologies",
//     location: "Indore, Madhya Pradesh, India",
//     email: "adiitya821@gmail.com",
//     phone: "7024202242",
//     linkedin: "www.linkedin.com/in/aditya-verman-av062000",
//     profileImage:
//       "https://ui-avatars.com/api/?name=Aditya+Verman&size=400&background=6366f1&color=fff&bold=true",
//   },

//   theme: {
//     primary: "#6366f1",
//     secondary: "#8b5cf6",
//     background: "#0f172a",
//     surface: "#1e293b",
//     text: "#f1f5f9",
//     textMuted: "#94a3b8",
//     gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//   },

//   about: {
//     summary:
//       "Goal-oriented Solution Engineer with 4+ years of experience in designing and developing scalable, high-performance applications. Adept in frontend and backend technologies including Angular, Node.js, Laravel, and JavaScript. Demonstrated success in enhancing system efficiency by up to 40%, leading teams, and delivering seamless user experiences.",
//     yearsOfExperience: "4+",
//     projectsCompleted: "50+",
//     technologiesMastered: "20+",
//   },

//   skills: {
//     frontend: [
//       "React.js",
//       "Angular",
//       "JavaScript",
//       "TypeScript",
//       "HTML5",
//       "CSS3",
//       "Tailwind CSS",
//     ],
//     backend: [
//       "Node.js",
//       "Laravel",
//       "Express.js",
//       "REST APIs",
//       "Microservices",
//       "Socket.IO",
//       "WebSocket",
//     ],
//     database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
//     tools: ["Docker", "CI/CD", "Git", "Cloud Computing", "MERN Stack"],
//   },

//   experience: [
//     {
//       company: "GAMMASTACK",
//       role: "Solution Engineer",
//       duration: "February 2024 - Present",
//       location: "Indore, Madhya Pradesh, India",
//       description: [
//         "Performed in-depth code reviews to identify and resolve complex issues",
//         "Optimized system performance and implemented scalable solutions",
//         "Enhanced architecture, performance, and resource utilization",
//       ],
//       current: true,
//     },
//     {
//       company: "MindCrew Technologies Pvt. Ltd.",
//       role: "Full Stack Developer",
//       duration: "January 2023 - February 2024",
//       location: "Indore",
//       description: [
//         "Designed and maintained scalable web applications",
//         "Optimized database queries and data management",
//         "Ensured high performance and responsiveness",
//       ],
//       current: false,
//     },
//     {
//       company: "Freelance",
//       role: "Full-Stack Developer",
//       duration: "October 2022 - January 2023",
//       location: "Remote",
//       description: [
//         "Developed dynamic, responsive UI web pages",
//         "Integrated third-party APIs and payment gateways",
//         "Implemented SEO best practices",
//       ],
//       current: false,
//     },
//     {
//       company: "Jmbliss IT Solutions",
//       role: "Full-stack Developer",
//       duration: "March 2021 - September 2022",
//       location: "Indore, Madhya Pradesh, India",
//       description: [
//         "Collaborated with cross-functional teams",
//         "Designed and integrated robust APIs",
//         "Resolved technical issues efficiently",
//       ],
//       current: false,
//     },
//   ],

//   education: [
//     {
//       institution: "Sage University Indore",
//       degree: "Master of Computer Applications (MCA)",
//       field: "Computer Science",
//       duration: "July 2022 - June 2024",
//     },
//     {
//       institution: "AKS University Satna",
//       degree: "Bachelor of Computer Application (BCA)",
//       field: "Computer Science",
//       duration: "2018 - 2021",
//     },
//   ],
// } as const;

// /* -------------------------
//    Helper / small components
//    ------------------------- */

// function IconStat({
//   icon: Icon,
//   value,
//   label,
//   theme,
// }: {
//   icon: any;
//   value: string;
//   label: string;
//   theme: typeof PORTFOLIO_CONFIG.theme;
// }) {
//   return (
//     <div
//       style={{
//         padding: "2rem",
//         backgroundColor: theme.background,
//         borderRadius: 12,
//         textAlign: "center",
//         border: `1px solid ${theme.primary}33`,
//         transition: "transform 0.3s",
//       }}
//       onMouseEnter={(e) =>
//         (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"
//       }
//       onMouseLeave={(e) =>
//         (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
//       }
//     >
//       <Icon size={40} style={{ color: theme.primary, margin: "0 auto 1rem" }} />
//       <div
//         style={{
//           fontSize: "2.5rem",
//           fontWeight: "bold",
//           color: theme.primary,
//           marginBottom: 8,
//         }}
//       >
//         {value}
//       </div>
//       <div style={{ color: theme.textMuted }}>{label}</div>
//     </div>
//   );
// }

// /* -------------------------
//    MAIN PORTFOLIO COMPONENT
//    ------------------------- */

// export default function App() {
//   // local UI state
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // memoize config and theme for stable references
//   const config = useMemo(() => PORTFOLIO_CONFIG, []);
//   const theme = config.theme;

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToSection = useCallback((id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setIsMenuOpen(false);
//   }, []);

//   /* ---- small render helpers ---- */

//   const navButtons = ["Home", "About", "Experience", "Skills", "Education", "Contact"];

//   const navButtonElement = (item: string) => (
//     <button
//       key={item}
//       onClick={() => scrollToSection(item.toLowerCase())}
//       style={{
//         background: "none",
//         border: "none",
//         color: theme.text,
//         cursor: "pointer",
//         fontSize: 14,
//         fontWeight: 500,
//         transition: "color 0.2s",
//       }}
//       onMouseEnter={(e: MouseEvent<HTMLButtonElement>) =>
//         ((e.currentTarget as HTMLButtonElement).style.color = theme.primary)
//       }
//       onMouseLeave={(e: MouseEvent<HTMLButtonElement>) =>
//         ((e.currentTarget as HTMLButtonElement).style.color = theme.text)
//       }
//     >
//       {item}
//     </button>
//   );

//   /* ---- styles container ---- */

//   const containerStyle: React.CSSProperties = {
//     backgroundColor: theme.background,
//     color: theme.text,
//     minHeight: "100vh",
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   };

//   /* -------------------------
//      Render Full UI (single-file)
//      ------------------------- */
//   return (
//     <div style={containerStyle}>
//       {/* small CSS block (animations + mobile tweaks) */}
//       <style>{`
//         @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
//         @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-10px); } }
//         @media (max-width: 768px) {
//           .desktop-menu { display: none !important; }
//           .mobile-menu-btn { display: block !important; }
//           .mobile-menu { display: block !important; }
//           .timeline-line, .timeline-dot { display: none !important; }
//           .experience-item { grid-template-columns: 1fr !important; }
//           .experience-content { order: 1 !important; text-align: left !important; }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           width: "100%",
//           zIndex: 1000,
//           backgroundColor: scrolled ? `${theme.surface}ee` : "transparent",
//           backdropFilter: scrolled ? "blur(10px)" : "none",
//           borderBottom: scrolled ? `1px solid ${theme.primary}33` : "none",
//           transition: "all 0.3s",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: 1200,
//             margin: "0 auto",
//             padding: "1rem 2rem",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "1.5rem",
//               fontWeight: "bold",
//               background: theme.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               margin: 0,
//             }}
//           >
//             {config.personal.name.split(" ")[0]}
//           </h1>

//           <div style={{ display: "flex", gap: "2rem" }} className="desktop-menu">
//             {navButtons.map((b) => navButtonElement(b))}
//           </div>

//           <button
//             onClick={() => setIsMenuOpen((s) => !s)}
//             className="mobile-menu-btn"
//             aria-label="menu"
//             style={{
//               background: "none",
//               border: "none",
//               color: theme.text,
//               cursor: "pointer",
//               display: "none",
//             }}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div
//             className="mobile-menu"
//             style={{ backgroundColor: theme.surface, padding: "1rem", display: "none" }}
//           >
//             {navButtons.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   color: theme.text,
//                   cursor: "pointer",
//                   fontSize: "1rem",
//                   padding: "0.75rem",
//                   width: "100%",
//                   textAlign: "left",
//                 }}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* HERO */}
//       <section
//         id="home"
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "2rem",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: `radial-gradient(circle at 20% 50%, ${theme.primary}15 0%, transparent 50%)`,
//             zIndex: 0,
//           }}
//         />

//         <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", zIndex: 1 }}>
//           <div
//             style={{
//               width: 180,
//               height: 180,
//               borderRadius: "50%",
//               margin: "0 auto 2rem",
//               background: theme.gradient,
//               padding: 5,
//               animation: "pulse 3s ease-in-out infinite",
//             }}
//           >
//             <img
//               src={config.personal.profileImage}
//               alt={config.personal.name}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 border: `3px solid ${theme.background}`,
//               }}
//             />
//           </div>

//           <h1
//             style={{
//               fontSize: "3.5rem",
//               fontWeight: "bold",
//               marginBottom: "1rem",
//               background: theme.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {config.personal.name}
//           </h1>

//           <p style={{ fontSize: "1.5rem", color: theme.textMuted, marginBottom: "1rem", fontWeight: 500 }}>
//             {config.personal.title}
//           </p>

//           <p
//             style={{
//               fontSize: "1.1rem",
//               color: theme.textMuted,
//               maxWidth: 600,
//               margin: "0 auto 2rem",
//             }}
//           >
//             {config.personal.tagline}
//           </p>

//           <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
//             <a
//               href={`mailto:${config.personal.email}`}
//               style={{
//                 padding: "0.75rem 1.5rem",
//                 background: theme.gradient,
//                 borderRadius: 8,
//                 color: "white",
//                 textDecoration: "none",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 8,
//                 fontWeight: 600,
//                 transition: "transform 0.3s",
//               }}
//               onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)")}
//               onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)")}
//             >
//               <Mail size={20} /> Get In Touch
//             </a>

//             <button
//               onClick={() => scrollToSection("experience")}
//               style={{
//                 padding: "0.75rem 1.5rem",
//                 background: "transparent",
//                 border: `2px solid ${theme.primary}`,
//                 borderRadius: 8,
//                 color: theme.primary,
//                 cursor: "pointer",
//                 fontWeight: 600,
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 8,
//                 transition: "all 0.3s",
//               }}
//               onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
//                 const t = e.currentTarget as HTMLButtonElement;
//                 t.style.background = theme.primary;
//                 t.style.color = "white";
//               }}
//               onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
//                 const t = e.currentTarget as HTMLButtonElement;
//                 t.style.background = "transparent";
//                 t.style.color = theme.primary;
//               }}
//             >
//               <Briefcase size={20} /> View Work
//             </button>
//           </div>

//           <a
//             href={`https://${config.personal.linkedin}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               color: theme.textMuted,
//               transition: "color 0.3s",
//               display: "inline-block",
//               marginTop: "2rem",
//             }}
//             onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = theme.primary)}
//             onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = theme.textMuted)}
//           >
//             <Linkedin size={24} />
//           </a>

//           <ChevronDown
//             size={32}
//             style={{
//               position: "absolute",
//               bottom: "2rem",
//               left: "50%",
//               transform: "translateX(-50%)",
//               color: theme.primary,
//               animation: "bounce 2s infinite",
//               cursor: "pointer",
//             }}
//             onClick={() => scrollToSection("about")}
//           />
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" style={{ padding: "6rem 2rem", backgroundColor: theme.surface }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               marginBottom: "3rem",
//               textAlign: "center",
//               background: theme.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             About Me
//           </h2>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
//             {[
//               { label: "Years of Experience", value: config.about.yearsOfExperience, icon: Award },
//               { label: "Projects Completed", value: config.about.projectsCompleted, icon: Code },
//               { label: "Technologies", value: config.about.technologiesMastered, icon: Briefcase },
//             ].map((stat, i) => (
//               <IconStat key={i} icon={stat.icon} value={stat.value} label={stat.label} theme={theme} />
//             ))}
//           </div>

//           <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: theme.textMuted, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
//             {config.about.summary}
//           </p>
//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section id="experience" style={{ padding: "6rem 2rem" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               marginBottom: "3rem",
//               textAlign: "center",
//               background: theme.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Work Experience
//           </h2>

//           <div style={{ position: "relative" }}>
//             <div
//               className="timeline-line"
//               style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: theme.gradient }}
//             />

//             {config.experience.map((job, i) => (
//               <div
//                 key={i}
//                 className="experience-item"
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "2rem",
//                   marginBottom: "4rem",
//                   position: "relative",
//                 }}
//               >
//                 <div
//                   className="timeline-dot"
//                   style={{
//                     position: "absolute",
//                     left: "50%",
//                     top: "2rem",
//                     transform: "translateX(-50%)",
//                     width: 20,
//                     height: 20,
//                     borderRadius: "50%",
//                     background: job.current ? theme.gradient : theme.surface,
//                     border: `3px solid ${theme.primary}`,
//                     zIndex: 2,
//                   }}
//                 />

//                 <div className="experience-content" style={{ textAlign: i % 2 === 0 ? "right" : "left", order: i % 2 === 0 ? 1 : 2 }}>
//                   <div
//                     style={{
//                       padding: "2rem",
//                       backgroundColor: theme.surface,
//                       borderRadius: 12,
//                       border: `1px solid ${theme.primary}33`,
//                       transition: "all 0.3s",
//                     }}
//                     onMouseEnter={(e) => {
//                       const t = e.currentTarget as HTMLDivElement;
//                       t.style.transform = "translateY(-5px)";
//                       t.style.borderColor = theme.primary;
//                     }}
//                     onMouseLeave={(e) => {
//                       const t = e.currentTarget as HTMLDivElement;
//                       t.style.transform = "translateY(0)";
//                       t.style.borderColor = `${theme.primary}33`;
//                     }}
//                   >
//                     {job.current && (
//                       <span
//                         style={{
//                           display: "inline-block",
//                           padding: "0.25rem 0.75rem",
//                           background: theme.gradient,
//                           borderRadius: 20,
//                           fontSize: "0.75rem",
//                           fontWeight: "bold",
//                           marginBottom: "1rem",
//                         }}
//                       >
//                         CURRENT
//                       </span>
//                     )}

//                     <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem", color: theme.primary }}>
//                       {job.role}
//                     </h3>
//                     <h4 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>{job.company}</h4>
//                     <p style={{ color: theme.textMuted, marginBottom: "0.5rem" }}>
//                       <MapPin size={16} style={{ display: "inline", marginRight: 6 }} />
//                       {job.location}
//                     </p>
//                     <p style={{ color: theme.textMuted, marginBottom: "1rem", fontSize: "0.9rem" }}>{job.duration}</p>

//                     <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
//                       {job.description.map((desc, j) => (
//                         <li
//                           key={j}
//                           style={{
//                             marginBottom: "0.75rem",
//                             paddingLeft: "1.5rem",
//                             position: "relative",
//                             color: theme.textMuted,
//                             lineHeight: 1.6,
//                           }}
//                         >
//                           <span style={{ position: "absolute", left: 0, color: theme.primary }}>▸</span>
//                           {desc}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* spacer column */}
//                 <div style={{ order: i % 2 === 0 ? 2 : 1 }} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" style={{ padding: "6rem 2rem", backgroundColor: theme.surface }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               marginBottom: "3rem",
//               textAlign: "center",
//               background: theme.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Technical Skills
//           </h2>

//           <div style={{ display: "grid", gap: "2rem" }}>
//             {Object.entries(config.skills).map(([category, skillList]) => (
//               <div
//                 key={category}
//                 style={{
//                   padding: "2rem",
//                   backgroundColor: theme.background,
//                   borderRadius: 12,
//                   border: `1px solid ${theme.primary}33`,
//                 }}
//               >
//                 <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: theme.primary, textTransform: "capitalize" }}>
//                   {category}
//                 </h3>

//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//                   {(skillList as string[]).map((skill, i) => (
//                     <span
//                       key={i}
//                       style={{
//                         padding: "0.5rem 1rem",
//                         backgroundColor: theme.surface,
//                         borderRadius: 8,
//                         border: `1px solid ${theme.primary}66`,
//                         color: theme.text,
//                         fontSize: "0.9rem",
//                         transition: "all 0.3s",
//                       }}
//                       onMouseEnter={(e) => {
//                         const t = e.currentTarget as HTMLSpanElement;
//                         t.style.background = theme.gradient;
//                         t.style.transform = "translateY(-2px)";
//                       }}
//                       onMouseLeave={(e) => {
//                         const t = e.currentTarget as HTMLSpanElement;
//                         t.style.background = theme.surface;
//                         t.style.transform = "translateY(0)";
//                       }}
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EDUCATION */}
//       <section id="education" style={{ padding: "6rem 2rem" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               marginBottom: "3rem",
//               textAlign: "center",
//               background: theme.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Education
//           </h2>

//           <div style={{ display: "grid", gap: "2rem", maxWidth: 800, margin: "0 auto" }}>
//             {config.education.map((edu, i) => (
//               <div
//                 key={i}
//                 style={{
//                   padding: "2rem",
//                   backgroundColor: theme.surface,
//                   borderRadius: 12,
//                   border: `1px solid ${theme.primary}33`,
//                   transition: "all 0.3s",
//                 }}
//                 onMouseEnter={(e) => {
//                   const t = e.currentTarget as HTMLDivElement;
//                   t.style.transform = "translateY(-5px)";
//                   t.style.borderColor = theme.primary;
//                 }}
//                 onMouseLeave={(e) => {
//                   const t = e.currentTarget as HTMLDivElement;
//                   t.style.transform = "translateY(0)";
//                   t.style.borderColor = `${theme.primary}33`;
//                 }}
//               >
//                 <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
//                   <GraduationCap size={40} style={{ color: theme.primary, flexShrink: 0 }} />
//                   <div>
//                     <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 8 }}>{edu.degree}</h3>
//                     <h4 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 8, color: theme.primary }}>{edu.institution}</h4>
//                     <p style={{ color: theme.textMuted, marginBottom: 6 }}>{edu.field}</p>
//                     <p style={{ color: theme.textMuted, fontSize: "0.9rem" }}>{edu.duration}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" style={{ padding: "6rem 2rem", backgroundColor: theme.surface }}>
//         <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
//           <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", background: theme.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//             Let's Connect
//           </h2>

//           <p style={{ fontSize: "1.1rem", color: theme.textMuted, marginBottom: "3rem", lineHeight: 1.8 }}>
//             I'm always interested in hearing about new projects and opportunities.
//           </p>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
//             <a
//               href={`mailto:${config.personal.email}`}
//               style={{
//                 padding: "1.5rem",
//                 backgroundColor: theme.background,
//                 borderRadius: 12,
//                 border: `1px solid ${theme.primary}33`,
//                 textDecoration: "none",
//                 color: theme.text,
//                 transition: "all 0.3s",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 8,
//               }}
//               onMouseEnter={(e) => {
//                 const t = e.currentTarget as HTMLAnchorElement;
//                 t.style.transform = "translateY(-5px)";
//                 t.style.borderColor = theme.primary;
//               }}
//               onMouseLeave={(e) => {
//                 const t = e.currentTarget as HTMLAnchorElement;
//                 t.style.transform = "translateY(0)";
//                 t.style.borderColor = `${theme.primary}33`;
//               }}
//             >
//               <Mail size={32} style={{ color: theme.primary }} />
//               <span style={{ fontWeight: 600 }}>Email</span>
//               <span style={{ fontSize: "0.9rem", color: theme.textMuted, wordBreak: "break-all" }}>{config.personal.email}</span>
//             </a>

//             <a
//               href={`tel:${config.personal.phone}`}
//               style={{
//                 padding: "1.5rem",
//                 backgroundColor: theme.background,
//                 borderRadius: 12,
//                 border: `1px solid ${theme.primary}33`,
//                 textDecoration: "none",
//                 color: theme.text,
//                 transition: "all 0.3s",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 8,
//               }}
//               onMouseEnter={(e) => {
//                 const t = e.currentTarget as HTMLAnchorElement;
//                 t.style.transform = "translateY(-5px)";
//                 t.style.borderColor = theme.primary;
//               }}
//               onMouseLeave={(e) => {
//                 const t = e.currentTarget as HTMLAnchorElement;
//                 t.style.transform = "translateY(0)";
//                 t.style.borderColor = `${theme.primary}33`;
//               }}
//             >
//               <Phone size={32} style={{ color: theme.primary }} />
//               <span style={{ fontWeight: 600 }}>Phone</span>
//               <span style={{ fontSize: "0.9rem", color: theme.textMuted }}>{config.personal.phone}</span>
//             </a>

//             <a
//               href={`https://${config.personal.linkedin}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 padding: "1.5rem",
//                 backgroundColor: theme.background,
//                 borderRadius: 12,
//                 border: `1px solid ${theme.primary}33`,
//                 textDecoration: "none",
//                 color: theme.text,
//                 transition: "all 0.3s",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 8,
//               }}
//               onMouseEnter={(e) => {
//                 const t = e.currentTarget as HTMLAnchorElement;
//                 t.style.transform = "translateY(-5px)";
//                 t.style.borderColor = theme.primary;
//               }}
//               onMouseLeave={(e) => {
//                 const t = e.currentTarget as HTMLAnchorElement;
//                 t.style.transform = "translateY(0)";
//                 t.style.borderColor = `${theme.primary}33`;
//               }}
//             >
//               <Linkedin size={32} style={{ color: theme.primary }} />
//               <span style={{ fontWeight: 600 }}>LinkedIn</span>
//               <span style={{ fontSize: "0.9rem", color: theme.textMuted, display: "flex", alignItems: "center", gap: 6 }}>
//                 Connect <ExternalLink size={14} />
//               </span>
//             </a>
//           </div>

//           <div style={{ padding: "1.5rem", backgroundColor: theme.background, borderRadius: 12, border: `1px solid ${theme.primary}33` }}>
//             <MapPin size={24} style={{ color: theme.primary, margin: "0 auto 0.5rem" }} />
//             <p style={{ color: theme.textMuted, margin: 0 }}>{config.personal.location}</p>
//           </div>
//         </div>
//       </section>

//       <footer style={{ padding: 16, textAlign: "center", borderTop: `1px solid ${theme.primary}33` }}>
//         <p style={{ color: theme.textMuted, margin: 0 }}>
//           © {new Date().getFullYear()} {config.personal.name}. Built with React.
//         </p>
//       </footer>
//     </div>
//   );
// }
