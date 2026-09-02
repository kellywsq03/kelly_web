export const projects = [
  {
    id: 'clockedit', icon: 'network', label: '01 / featured', stack: 'typescript // fastify // react',
    title: 'ClockedIt: multi-agent coordination middleware',
    summary: 'Middleware for coordinating coding agents and eliminating cross-file stale-read conflicts that file-locking and git cannot detect.',
    tags: ['event-streaming UI', '30+ server tests', '5-person team'],
    details: [
      ['what I did', 'Defined the layered architecture, agent-router protocol, request/response/error contracts, and the React monitoring UI.'],
      ['why it matters', 'Parallel work only feels fast when the system can explain what every agent is doing.'],
    ],
  },
  {
    id: 'simfella', icon: 'react', label: '02 / collaboration', stack: 'react // go // websockets', title: 'Simfella: collaborative systems dynamics',
    summary: 'A real-time web app for building and debugging time-stepped simulations together, piloted with 600 NUS Residential College 4 residents.', tags: ['real-time collaboration', 'education tooling', '+3 / 6 survey score'],
    details: [['technical angle', 'Built full-stack features across a React frontend and Go backend with WebSockets for shared modelling state.'], ['signal', 'Outperformed the incumbent tool across learning, collaboration, debugging, and model-building support.']],
  },
  {
    id: 'power-grid-copilot', icon: 'database', label: '03 / production', stack: 'python // react // kubernetes', title: 'Power grid copilot',
    summary: 'An AI chatbot for power grid operators to query telemetry and documentation with natural language, built during my Singapore Power Group internship.', tags: ['Django', 'LangGraph', 'MongoDB', 'Kafka', 'Docker'],
    details: [['what I did', 'Engineered agentic retrieval and deterministic tools for data retrieval, computation, and chart generation; collaborated with 10 senior engineers.'], ['scale', 'IoT ingestion architecture designed for a planned nationwide rollout to 12,000 substations.']],
  },
  {
    id: 'java-slang', icon: 'code', label: '04 / dissertation', stack: 'typescript // interpreter', title: 'Extending java-slang',
    summary: 'Extending Source Academy’s open-source in-browser Java interpreter with language features such as inheritance and generics.', tags: ['AST architecture', 'language tooling', '~800 students'],
    details: [['research question', 'How do you add expressive language features without breaking the interpreter architecture or the learning experience?'], ['context', 'B.Comp. dissertation with the NUS School of Computing and Source Academy team.']],
  },
  {
    id: 'planefella', icon: 'travel', label: '05 / hackathon', stack: 'python // flask // vite', title: 'PlaneFella',
    summary: 'An AI-assisted travel itinerary platform combining web scraping, video transcription, and itinerary building in a 24-hour Hack&Roll prototype.', tags: ['Playwright', 'Whisper', 'Gemini'],
    details: [['the constraint', 'Turn a personal pain point — convoluted travel planning — into a fully functional prototype under a 24-hour deadline.'], ['the lesson', 'Good scope is a technical superpower at hackathon speed.']],
  },
  {
    id: 'respondr', icon: 'spatial', label: '06 / spatial', stack: 'swift // realitykit', title: 'RespondR',
    summary: 'An Apple Vision Pro and companion iPhone training tool combining LiDAR room scanning with a real-time 3D fire outbreak simulation.', tags: ['Vision Pro', 'LiDAR', '2.5-day build'],
    details: [['the build', 'Engineered an immersive AR/VR firefighter training tool for the Spatial Hack AI challenge.'], ['the move', 'Used agentic AI-assisted development to compress the build cycle without losing the core interaction.']],
  },
];

export const skills = [
  ['TypeScript', 'typescript'], ['Java', 'java'], ['Go', 'go'], ['Swift', 'swift'], ['React', 'react'], ['Django', 'django'], ['FastAPI', 'api'], ['Flask', 'api'], ['PostgreSQL', 'database'], ['MongoDB', 'database'], ['Redis', 'database'], ['Docker', 'docker'], ['Kubernetes', 'network'], ['Jenkins', 'network'], ['Apache Kafka', 'network'], ['LangGraph', 'ai'], ['PyTorch', 'ai'], ['OpenAI', 'ai'], ['Microservices', 'network'], ['Event-driven architecture', 'network'],
];

export const terminalCommands = {
  help: 'available commands:\n  whoami              identity + current status\n  ls projects         list the project deck\n  cat education       print the education log\n  python              show the primary language\n  open <project>      open a project card\n  contact             jump to contact.exe\n  clear               clear the shell\n  exit                close the shell',
  whoami: 'kelly_wsq03 — penultimate cs undergrad @ nus; aspiring swe; builds systems, interfaces, and small weird things.',
  'ls projects': 'clockedit/\nsimfella/\npower-grid-copilot/\njava-slang/\nplanefella/\nrespondr/',
  'cat education': 'NUS / Computer Science / GPA 4.81\nDean’s List + ASEAN Undergraduate Merit Scholarship\nSingapore Power Group / Full-Stack Developer Intern',
  python: 'Python is the primary language. Also fluent in TypeScript, Java, Go, Swift, SQL, and HTML/CSS.',
  contact: 'jumping to contact.exe — send the good stuff.',
};
