const skills = {
  'Frontend': ['React.js', 'Redux Toolkit', 'RTK Query', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication', 'Zod', 'Helmet', 'CORS', 'Rate Limiting'],
  'Database': ['MongoDB (Mongoose)', 'MySQL', 'SQL Queries', 'Schema Design', 'Indexing'],
  'AI & Tools': ['LLM API Integration', 'Multi-Provider AI Orchestration', 'Prompt Engineering', 'Health-Check Systems'],
  'Dev Tools': ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'VS Code', 'Agile', 'CI/CD'],
  'Core CS': ['Data Structures & Algorithms', 'TypeScript', 'Python', 'RBAC', 'MVC'],
};

export const allSkills = Object.values(skills).flat();

export default skills;
