export const PORTFOLIO = {
personal: {
name: 'Aditya Verman',
title: 'Solution Engineer | Full-Stack Team Lead',
tagline: 'Building scalable solutions with modern technologies',
location: 'Indore, Madhya Pradesh, India',
email: 'adiitya821@gmail.com',
phone: '7024202242',
linkedin: 'www.linkedin.com/in/aditya-verman-av062000',
profileImage: 'https://ui-avatars.com/api/?name=Aditya+Verman&size=400&background=6366f1&color=fff&bold=true',
},
theme: {
primary: '#6366f1',
secondary: '#8b5cf6',
background: '#0f172a',
surface: '#1e293b',
text: '#f1f5f9',
textMuted: '#94a3b8',
gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
},
about: {
summary: 'Goal-oriented Solution Engineer with 4+ years of experience in designing and developing scalable, high-performance applications. Adept in frontend and backend technologies including Angular, Node.js, Laravel, and JavaScript. Demonstrated success in enhancing system efficiency by up to 40%, leading teams, and delivering seamless user experiences.',
yearsOfExperience: '4+',
projectsCompleted: '50+',
technologiesMastered: '20+',
},
skills: {
frontend: ['React.js','Angular','JavaScript','TypeScript','HTML5','CSS3','Tailwind CSS'],
backend: ['Node.js','Laravel','Express.js','REST APIs','Microservices','Socket.IO','WebSocket'],
database: ['MySQL','PostgreSQL','MongoDB','Firebase'],
tools: ['Docker','CI/CD','Git','Cloud Computing','MERN Stack'],
},
experience: [
{ company: 'GAMMASTACK', role: 'Solution Engineer', duration: 'February 2024 - Present', location: 'Indore, Madhya Pradesh, India', description: ['Performed in-depth code reviews to identify and resolve complex issues','Optimized system performance and implemented scalable solutions','Enhanced architecture, performance, and resource utilization'], current: true },
{ company: 'MindCrew Technologies Pvt. Ltd.', role: 'Full Stack Developer', duration: 'January 2023 - February 2024', location: 'Indore', description: ['Designed and maintained scalable web applications','Optimized database queries and data management','Ensured high performance and responsiveness'], current: false },
{ company: 'Freelance', role: 'Full-Stack Developer', duration: 'October 2022 - January 2023', location: 'Remote', description: ['Developed dynamic, responsive UI web pages','Integrated third-party APIs and payment gateways','Implemented SEO best practices'], current: false },
{ company: 'Jmbliss IT Solutions', role: 'Full-stack Developer', duration: 'March 2021 - September 2022', location: 'Indore, Madhya Pradesh, India', description: ['Collaborated with cross-functional teams','Designed and integrated robust APIs','Resolved technical issues efficiently'], current: false },
],
education: [{ institution: 'Sage University Indore', degree: 'Master of Computer Applications (MCA)', field: 'Computer Science', duration: 'July 2022 - June 2024' },{ institution: 'AKS University Satna', degree: 'Bachelor of Computer Application (BCA)', field: 'Computer Science', duration: '2018 - 2021' }]
} as const;