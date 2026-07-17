const projects = [
  {
    id: 1,
    number: '01',
    title: 'Kriya',
    tagline: 'Personalized AI Learning Platform',
    description:
      'Built a full-stack AI platform generating unique, role-specific learning roadmaps based on a student\'s skills and target role. Features a 3-stage AI Curriculum Engine mapping skill gaps to a 12–18 node dependency graph.',
    approach:
      'Engineered a fault-tolerant AI Router with Gemini primary and Groq fallback, ensuring uninterrupted learning. Implemented dual-token auth with silent RTK Query renewal and built an AI Assignment Evaluator scoring submissions 0–100 against acceptance criteria.',
    tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Gemini', 'Groq', 'JWT', 'Vercel'],
    image: '/images/kriya.png',
    live: 'https://kriya-pro.vercel.app/',
    github: '#',
  },
  {
    id: 2,
    number: '02',
    title: 'GreenGrid',
    tagline: 'EV & CNG Station Management',
    description:
      'A comprehensive management system for EV and CNG charging stations with real-time mapping and station analytics. It provides a unified platform to manage stations, track usage, and provide real-time availability to drivers.',
    approach:
      'Developed a full MERN stack application with Google Maps API integration for real-time station mapping, user authentication, and management dashboards.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Google Maps API'],
    image: '/images/greengrid_new.png',
    live: '#',
    github: '#',
  },
];

export default projects;
