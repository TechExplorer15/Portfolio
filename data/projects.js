const projects = [
  {
    id: 1,
    number: '01',
    title: 'Kriya',
    tagline: 'AI-Powered Learning Platform',
    description:
      'A personalized AI learning platform that creates adaptive paths based on each student\'s pace and understanding level.',
    problem:
      'Students struggle to find personalized learning paths that adapt to their pace. One-size-fits-all approaches leave many behind.',
    approach:
      'Built an intelligent platform using React and Node.js, integrated with AI algorithms that analyze learning patterns and dynamically adjust content difficulty.',
    tech: ['React', 'Node.js', 'AI/ML', 'Tailwind CSS'],
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
      'A comprehensive management system for EV and CNG charging stations with real-time mapping and station analytics.',
    problem:
      'EV and CNG station operators lack a unified platform to manage stations, track usage, and provide real-time availability to drivers.',
    approach:
      'Developed a full MERN stack application with Google Maps API integration for real-time station mapping, user authentication, and management dashboards.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Google Maps API'],
    image: '/images/greengrid_new.png',
    live: '#',
    github: '#',
  },
];

export default projects;
