export const personal = {
  name: 'Yashwanth Mallareddygari',
  fullName: 'Yashwanth Reddy Mallareddygari',
  email: 'yashwanthmallareddygari@gmail.com',
  phone: '+1 (657) 631 1232',
  location: 'Dallas–Fort Worth Metroplex, TX',
  github: 'https://github.com/MYASHWANTHREDDY',
  linkedin: 'https://linkedin.com/in/yashwanthreddymallareddygari',
  titles: ['Software Engineer', 'AI & LLM Engineer', 'Data Engineer', 'Full Stack Developer'],
  tagline: [
    "Software engineer with an MS in Computer Science from Cal State Fullerton.",
    "I build systems that hold up under measurement — LLM agents, healthcare data infrastructure at multi-million-record scale, and constraint optimizers that ship to real users.",
    "Actively seeking full-time SWE roles.",
  ],
  bio: "MS CS graduate from Cal State Fullerton, currently building healthcare data pipelines on Google Cloud as an AI & Full-Stack Development Intern at TMT IT Solutions. I build systems and then prove they work: I've linked 5M patient records on GCP for $78, shipped an LLM screening agent that abstains instead of guessing, and replaced 10+ hours of manual scheduling with a 30-second constraint solver for 50+ staff. The through-line is measurement — every project here publishes its own numbers, including the ones that aren't flattering. Outside the terminal, I'm tuning my Kawasaki Ninja 300: same obsession with performance, different throttle.",
}

export const education = [
  {
    school: 'California State University, Fullerton',
    shortName: 'CSUF',
    location: 'Fullerton, CA, USA',
    degree: 'Master of Science in Computer Science',
    gpa: '3.77',
    date: 'May 2026',
    coursework: ['Operating Systems', 'Algorithms & Optimization', 'Artificial Intelligence', 'Database Systems', 'Software Management', 'Web Backend Engineering', 'Advanced Blockchain Technologies'],
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    shortName: 'JNTU Hyderabad',
    location: 'Hyderabad, India',
    degree: 'Bachelor of Technology in Computer Science',
    gpa: '3.3',
    date: 'May 2023',
    coursework: ['Data Structures', 'Computer Networks', 'Software Engineering', 'Cloud Computing', 'Web Technologies', 'Database Management Systems', 'Operating Systems', 'Artificial Intelligence'],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'C++', 'C', 'Java', 'Bash', 'HTML5', 'CSS3'],
  },
  {
    category: 'AI, LLM & Optimization',
    items: ['LangGraph', 'LangChain', 'Claude API', 'MCP', 'RAG', 'ChromaDB', 'Embeddings', 'Pydantic', 'OR-Tools CP-SAT'],
  },
  {
    category: 'Data Engineering',
    items: ['Apache Kafka', 'Avro', 'Schema Registry', 'Spark Structured Streaming', 'PySpark', 'Airflow', 'dbt', 'Great Expectations', 'DuckDB', 'Parquet', 'pandas', 'Apache NiFi'],
  },
  {
    category: 'Backend & APIs',
    items: ['Flask', 'FastAPI', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'SQLAlchemy', 'Alembic', 'JWT', 'RBAC'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React 19', 'React Native', 'Expo', 'Vite', 'Tailwind CSS', 'React Router'],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'BigQuery', 'Google Cloud Storage', 'Neon'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['GCP', 'Cloud Composer', 'Dataproc Serverless', 'AWS EC2', 'AWS RDS', 'Docker', 'Docker Compose', 'Terraform', 'GitHub Actions', 'Vercel', 'Railway', 'Render'],
  },
  {
    category: 'Testing & Observability',
    items: ['pytest', 'respx', 'ruff', 'Prometheus', 'Grafana', 'Streamlit', 'Tableau', 'Postman', 'Git'],
  },
]

export const projects = [
  {
    title: 'Patient Identity Resolution',
    dates: 'Jul 2026',
    summary: "Fellegi-Sunter record linkage across 4 vendors and 6 data domains, proven on a real 5M-record GCP run.",
    description: [
      'Built a Master Data Management pipeline that resolves one stable patient identifier per real person across 4 vendors and 6 data domains, using Fellegi-Sunter probabilistic record linkage with golden-record survivorship and a full audit trail.',
      'Ran one codebase at two tiers, unchanged apart from a --tier flag: 50K records locally on DuckDB in ~90 seconds, and a real 5,048,389-record run on GCP (BigQuery + Dataproc Serverless) at 0.965 auto-match precision for ~$78.',
      'Documented six failures that only surfaced at 5M records — including a blocking fix that cut candidate pairs from 647M to 337M, and per-tier threshold re-measurement instead of assuming the 50K threshold transfers.',
    ],
    stats: [
      { value: '5.0M', label: 'Records Linked' },
      { value: '0.965', label: 'Match Precision' },
      { value: '$78', label: 'Full GCP Run' },
    ],
    tech: ['Python', 'BigQuery', 'Dataproc', 'PySpark', 'dbt', 'Airflow', 'Terraform', 'DuckDB', 'Streamlit'],
    github: 'https://github.com/MYASHWANTHREDDY/patient-identity-resolution',
    live: 'https://patient-identity-resolution.streamlit.app',
  },
  {
    title: 'TrialSage — Clinical Trial Screening Agent',
    dates: 'Aug 2026',
    summary: "A LangGraph agent that screens eligibility criterion by criterion — and abstains when the record can't answer.",
    description: [
      'Built a clinical trial eligibility agent on LangGraph that reasons criterion by criterion and returns three-valued eligibility — match, no-match, or insufficient info — abstaining rather than guessing when the patient record does not answer the question.',
      'Evaluated against 88 hand-labelled (criterion, profile) pairs across 8 profiles and 6 conditions: 0.989 accuracy with zero false matches and zero false no-matches across every run — the two error cells that actually carry clinical cost.',
      'Routed criterion reasoning to Claude Sonnet and planning/consolidation to Claude Haiku, validated every model reply through Pydantic at each node boundary, and covered the system with 335 fully offline tests.',
    ],
    stats: [
      { value: '0.99', label: 'Label Accuracy' },
      { value: '0', label: 'False Matches' },
      { value: '335', label: 'Offline Tests' },
    ],
    tech: ['LangGraph', 'Claude API', 'Pydantic', 'Python', 'Streamlit', 'pytest'],
    github: 'https://github.com/MYASHWANTHREDDY/trialsage',
  },
  {
    title: 'MedBridge — Healthcare MCP Server',
    dates: 'Aug 2026',
    summary: "An MCP server putting clinical trials, FDA recalls, and drug labels behind six typed, validated tools.",
    description: [
      'Built a Model Context Protocol server that gives any LLM client live, typed access to clinical trials, FDA drug recalls, adverse-event reports, drug labels, and RxNorm drug-name normalization through six validated tools.',
      'Wrapped three public healthcare APIs behind a uniform contract: every response carries source and retrieved_at, long fields truncate with an explicit flag, and failures return structured errors instead of stack traces or silently empty results.',
      'Covered the server with 60 fully offline tests using respx against real captured payloads — spanning retry-then-succeed on 5xx, rate-limit and timeout mapping, input validation, and tool-level response contracts.',
    ],
    stats: [
      { value: '6', label: 'Typed Tools' },
      { value: '3', label: 'Live APIs' },
      { value: '60', label: 'Offline Tests' },
    ],
    tech: ['Python', 'MCP', 'Pydantic', 'httpx', 'pytest', 'respx', 'openFDA', 'RxNorm'],
    github: 'https://github.com/MYASHWANTHREDDY/medbridge-mcp',
  },
  {
    title: 'MedCite — Cited Healthcare RAG',
    dates: 'Jul 2026',
    summary: "Healthcare RAG that cites every claim, with evaluation that separates retrieval failure from generation failure.",
    description: [
      'Built a retrieval-augmented Q&A system over healthcare documents that attaches a source citation to every individual claim, so each sentence in an answer can be traced back to the passage it came from.',
      'Designed a two-tier evaluation that separates retrieval failure from generation failure, then benchmarked two Claude models across 10 test cases on keyword coverage, retrieval accuracy, cost, and latency.',
      'Found Haiku matched Sonnet on keyword coverage (0.88) and retrieval accuracy (1.00) at 28% of the cost and 41% of the latency — and made it the default on that evidence rather than on assumption.',
    ],
    stats: [
      { value: '1.00', label: 'Retrieval Accuracy' },
      { value: '72%', label: 'Cheaper per Query' },
      { value: '2.4x', label: 'Lower Latency' },
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'Claude API', 'HuggingFace', 'Streamlit'],
    github: 'https://github.com/MYASHWANTHREDDY/medcite',
    live: 'https://medcite-solution.streamlit.app/',
  },
  {
    title: 'Streaming E-Commerce Analytics',
    dates: 'Jul – Aug 2026',
    summary: "Kafka to Spark to a dbt lakehouse, sustaining ~5K events/sec straight through a live broker failure.",
    description: [
      'Built a real-time order analytics pipeline: Kafka ingestion into Spark Structured Streaming, a bronze/gold lakehouse rebuilt by dbt, Great Expectations quality gates, and Airflow orchestration behind a Streamlit dashboard.',
      'Sustained ~5,000 events/sec from a single producer against a 3-broker cluster that kept producing through a live broker kill with zero failed writes, verified against the Kafka metadata quorum.',
      'Routed malformed events to a dead-letter topic tagged with the reason they failed, confirmed by consuming the DLQ directly and tallying five corruption variants against what the producer actually sent.',
    ],
    stats: [
      { value: '~5K/s', label: 'Events Sustained' },
      { value: '19', label: 'dbt Schema Tests' },
      { value: '0', label: 'Writes Lost on Kill' },
    ],
    tech: ['Apache Kafka', 'Spark Structured Streaming', 'Airflow', 'dbt', 'Great Expectations', 'PostgreSQL', 'Docker', 'Streamlit'],
    github: 'https://github.com/MYASHWANTHREDDY/ecommerce-streaming-analytics',
    live: 'https://ecommerce-streaming-analytics.streamlit.app',
  },
  {
    title: 'Automated Work Scheduling Platform',
    dates: 'Aug 2025 – May 2026',
    summary: "OR-Tools CP-SAT scheduling that replaced 10+ hours of spreadsheet work with a 30-second solve.",
    description: [
      'Built a constraint-optimization scheduling platform with OR-Tools CP-SAT, Flask, and PostgreSQL for 50+ student staff — cutting schedule generation from 10+ hours of manual spreadsheet work to under 30 seconds.',
      'Encoded availability, certification, and labor policy as hard constraints, lifting schedule feasibility from ~70% to 95%+ with zero constraint violations and cutting supervisor scheduling effort by ~60%.',
      'Shipped supervisor and staff workflows — availability, swap requests, approvals, and a full audit log — through a React Native/Expo mobile app, deployed on Render with Docker Compose and GitHub Actions.',
    ],
    screenshots: [
      '/screenshots/01-login.png',
      '/screenshots/02-admin-dashboard.png',
      '/screenshots/03-shifts-calendar.png',
      '/screenshots/04-schedule-generator.png',
      '/screenshots/05-employee-profile.png',
      '/screenshots/06-employee-dashboard.png',
      '/screenshots/07-swaps-timesheets.png',
    ],
    stats: [
      { value: '30s', label: 'Generation Time' },
      { value: '95%+', label: 'Feasibility, from ~70%' },
      { value: '~60%', label: 'Less Supervisor Effort' },
    ],
    tech: ['OR-Tools CP-SAT', 'Flask', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'React Native', 'Expo', 'Docker Compose', 'Render', 'GitHub Actions'],
    github: 'https://github.com/MYASHWANTHREDDY/csuf-scheduler',
    live: 'https://csuf-scheduler.onrender.com/',
  },
  {
    title: 'Hindu Yuva Club Website',
    dates: 'Dec 2025 – Jan 2026',
    summary: "Full-stack club platform with JWT auth and a role-based admin dashboard, CI/CD to Vercel and Railway.",
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
]

export const experience = [
  {
    title: 'AI & Full-Stack Development Intern',
    company: 'TMT IT Solutions',
    location: 'Plano, TX',
    dates: 'Jul 2026 – Present',
    bullets: [
      'Design and automate data workflows using BigQuery, Cloud Composer, and Cloud Storage, transforming raw multi-vendor healthcare data into standardized, governance-compliant structures.',
      'Develop Apache Airflow DAGs orchestrating production ETL pipelines, managing dependencies, scheduling, and failure monitoring across membership, pharmacy, medical, and lab data domains.',
      'Support backend development in Java and Spring Boot; build internal interfaces and data visualizations with HTML, CSS, JavaScript, and Streamlit.',
      'Conduct structured testing, validation, and root-cause analysis, writing reconciliation queries that catch data quality defects before release.',
      'Collaborate through Git branching and pull-request workflows in an agile team.',
    ],
  },
  {
    title: 'Community Service Officer',
    company: 'University Police Department, CSUF',
    location: 'Fullerton, CA',
    dates: 'Aug 2024 – May 2026',
    bullets: [
      'Conduct 15+ patrols weekly and perform 50+ lockups/escorts monthly, supporting emergency response and enforcing campus safety protocols.',
      'Collaborate on 20+ emergency operations annually, coordinating with teams to support a 45,000+ student community with zero incident escalations.',
      'Document incidents, manage access control, and communicate with students and staff to resolve issues.',
    ],
  },
  {
    title: 'Software & Operations Intern',
    company: 'Star Lifts India',
    location: 'India',
    dates: 'Jan 2023 – Nov 2023',
    bullets: [
      'Developed and maintained a responsive company website using HTML, CSS, JavaScript, Bootstrap, REST integrations, and SEO practices — increasing customer inquiries by 30%.',
      'Implemented a Python/Flask accounting and inventory system with SQLite, REST APIs, and role-based access control, reducing manual processing by 40% and saving 10+ hours weekly.',
      'Supported client and operations management through requirement gathering, communication, service coordination, and on-site visits to tailor software to real-world needs.',
    ],
  },
]

export const leadership = [
  {
    role: 'Board of Directors – College of Engineering & Computer Science',
    org: 'Associated Students, Inc. (ASI), CSUF',
    dates: 'Jun 2025 – May 2026',
    detail: 'Served on the student government board representing 6,000+ Engineering & Computer Science students, advocating for academic resources, student initiatives, and departmental policy at the university level.',
  },
  {
    role: 'Events Chair',
    org: 'Association for Intercultural Awareness (AICA), ASI, CSUF',
    dates: 'Aug 2024 – May 2025',
    detail: 'Managed a $35K event budget across 5+ intercultural events.',
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
