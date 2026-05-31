export const personal = {
  name: 'Yashwanth Reddy',
  fullName: 'Yashwanth Reddy Mallareddygari',
  email: 'yashwanthmallareddygari@gmail.com',
  phone: '+1 (657) 631 1232',
  location: 'Fullerton, CA',
  github: 'https://github.com/MYASHWANTHREDDY',
  linkedin: 'https://linkedin.com/in/yashwanthreddymallareddygari',
  titles: ['Full Stack Developer', 'Software Engineer', 'Backend Engineer'],
  bio: "MS CS graduate from Cal State Fullerton with a passion for building scalable full-stack applications. I've shipped production systems serving 100+ users — from constraint-optimization scheduling platforms to full-stack club management tools — and I'm actively looking for software engineering roles where I can keep solving hard problems. Outside the terminal, I'm tuning my Kawasaki Ninja 300 — same obsession with performance, different throttle.",
}

export const education = [
  {
    school: 'California State University, Fullerton',
    shortName: 'CSUF',
    degree: 'Master of Science in Computer Science',
    gpa: '3.77',
    date: 'May 2026',
    coursework: ['Operating Systems', 'Algorithms & Optimization', 'Artificial Intelligence', 'Database Systems', 'Software Management', 'Web Backend Engineering', 'Advanced Blockchain Technologies'],
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    shortName: 'JNTU Hyderabad',
    degree: 'Bachelor of Technology in Computer Science',
    gpa: '3.3',
    date: 'May 2023',
    coursework: ['Data Structures', 'Computer Networks', 'Software Engineering', 'Cloud Computing', 'Web Technologies', 'Database Management Systems', 'Operating Systems', 'Artificial Intelligence'],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Flask', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC'],
  },
  {
    category: 'Databases & Cloud',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS EC2', 'AWS RDS', 'Docker'],
  },
  {
    category: 'Data & Tools',
    items: ['PySpark', 'Apache NiFi', 'OR-Tools', 'SQLAlchemy', 'Tableau', 'Git', 'Postman', 'GitHub Actions'],
  },
]

export const projects = [
  {
    title: 'Automated Work Scheduling Platform',
    dates: 'Aug 2025 – May 2026',
    description: [
      'Developed a constraint-optimization scheduling system using OR-Tools, Flask, and PostgreSQL — reducing supervisor workload by 60% and generation time from 10+ hours to under 30 seconds.',
      'Implemented constraint-based optimization and automated timesheet validation, achieving 95%+ schedule feasibility versus 60% with manual scheduling.',
      'Designed role-based React dashboards for 100+ users and deployed containerized services via Docker, Alembic migrations, and AWS EC2.',
    ],
    screenshots: [
      '/screenshots/02-admin-dashboard.png',
      '/screenshots/03-shifts-calendar.png',
      '/screenshots/04-schedule-generator.png',
      '/screenshots/05-employee-profile.png',
    ],
    stats: [
      { value: '60%', label: 'Workload Reduced' },
      { value: '95%+', label: 'Schedule Feasibility' },
      { value: '30s', label: 'Generation Time' },
    ],
    tech: ['OR-Tools', 'Flask', 'PostgreSQL', 'React', 'Docker', 'AWS EC2', 'Alembic'],
    github: 'https://github.com/MYASHWANTHREDDY/csuf-scheduler',
    live: 'https://csuf-scheduler.onrender.com/',
  },
  {
    title: 'Hindu Yuva Club Website',
    dates: 'Dec 2025 – Jan 2026',
    description: [
      'Built a full-stack web app using React 19, Vite, Tailwind CSS, and Express.js with JWT authentication and a role-based admin dashboard — achieving zero critical vulnerabilities.',
      'Engineered RESTful APIs with rate limiting, input validation, data sanitization, and server-side request logging; supported 100+ concurrent users in production.',
      'Deployed to production via Vercel and Railway with Docker containerization, GitHub Actions CI/CD pipelines, security headers, and caching strategies.',
    ],
    stats: [
      { value: '100+', label: 'Concurrent Users' },
      { value: '0', label: 'Critical Vulnerabilities' },
      { value: 'CI/CD', label: 'Auto-Deployed' },
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Express.js', 'Node.js', 'JWT', 'Docker', 'GitHub Actions', 'Vercel', 'Railway'],
    github: 'https://github.com/MYASHWANTHREDDY/HINDU-YUVA',
    live: 'https://hindu-yuva-lovat.vercel.app/',
  },
  {
    title: 'Real-Time E-Commerce Data Pipeline',
    dates: '2025',
    description: [
      'Built a real-time data pipeline ingesting e-commerce event streams (orders, inventory, user behavior) using Apache Kafka and PySpark Structured Streaming.',
      'Processed and aggregated events into a PostgreSQL data warehouse, enabling downstream analytics dashboards with sub-second latency.',
      'Containerized all pipeline components with Docker Compose and automated orchestration with Apache Airflow for scheduled batch jobs.',
    ],
    tech: ['Apache Kafka', 'PySpark', 'PostgreSQL', 'Docker', 'Airflow', 'Python'],
    github: 'https://github.com/MYASHWANTHREDDY/Real-Time-Ecommerce-Data-Pipeline',
  },
]

export const experience = [
  {
    title: 'Software & Operations Intern',
    company: 'Star Lifts India',
    dates: 'Jan 2023 – Nov 2023',
    bullets: [
      'Developed and maintained a responsive company website using HTML, CSS, JavaScript, Bootstrap, REST integrations, and SEO practices — increasing customer inquiries by 30%.',
      'Implemented a Python/Flask accounting and inventory system with SQLite, REST APIs, and role-based access control, reducing manual processing by 40% and saving 10+ hours weekly.',
      'Supported client and operations management through requirement gathering, communication, service coordination, and on-site visits to tailor software to real-world needs.',
    ],
  },
  {
    title: 'Community Service Officer',
    company: 'University Police Department, CSUF',
    dates: 'Aug 2024 – Present',
    bullets: [
      'Conduct 15+ patrols weekly and perform 50+ lockups/escorts monthly, supporting emergency response and enforcing campus safety protocols.',
      'Collaborate on 20+ emergency operations annually, coordinating with teams to support a 45,000+ student community with zero incident escalations.',
      'Document incidents, manage access control, and communicate with students and staff to resolve issues.',
    ],
  },
]

export const leadership = [
  {
    role: 'Board of Directors – College of Engineering & Computer Science',
    org: 'Associated Students, Inc. (ASI), CSUF',
    dates: 'Jun 2025 – Present',
    detail: null,
  },
  {
    role: 'Events Chair',
    org: 'Association for Intercultural Awareness (AICA), ASI, CSUF',
    dates: 'Aug 2024 – May 2025',
    detail: 'Managed a $35K event budget across 10+ intercultural events.',
  },
  {
    role: 'President',
    org: 'Hindu Yuva at CSUF',
    dates: 'Jun 2024 – May 2025',
    detail: 'Grew organization 100%, managed $20K annual budget. Tuffy Award — President of the Year 2025.',
  },
]

export const awards = [
  {
    title: 'President of the Year — Tuffy Award 2025',
    org: 'Hindu Yuva at CSUF',
  },
  {
    title: 'Organization of the Year',
    org: 'Hindu Yuva at CSUF',
  },
  {
    title: 'Emerging Organization of the Year',
    org: 'Hindu Yuva at CSUF',
  },
]
