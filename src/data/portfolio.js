export const projects = [
  {
    id: 'clockedit', icon: 'network', stack: ['typescript', 'fastify', 'react'],
    title: 'ClockedIt',
    subtitle: 'Agent coordination middleware',
    summary: 'middleware for coordinating coding agents and eliminating stale-read conflicts that git cannot detect.',
    video: 'https://youtu.be/-jDvFhd6jbE'
  },
  {
    id: 'simfella', icon: 'react', stack: ['react', 'go', 'websockets'], title: 'Simfella',
    subtitle: 'Systems dynamics modelling',
    summary: 'a real-time web app for building and debugging time-stepped simulations piloted with 600 NUS Residential College 4 residents.',
    images: ['simfella.png'],
  },
  {
    id: 'cerebro', icon: 'database', stack: ['python', 'react', 'django', 'langgraph'], title: 'Cerebro',
    subtitle: 'semantic layer for telemetry',
    summary: 'AI chatbot for power grid operators to query telemetry and documentation with natural language, built during my Singapore Power Group internship.',
    images: ['cerebro.png', 'cerebro_2.png'],
  },
  {
    id: 'sourceacademy', icon: 'code', stack: ['typescript'], title: 'Source academy',
    subtitle: 'open-source cs education platform',
    summary: 'extending Source Academy’s open-source in-browser Java interpreter with language features.',
  },
  {
    id: 'planefella', icon: 'travel', stack: ['python', 'flask', 'react'], title: 'PlaneFella',
    subtitle: 'AI-powered itinerary builder',
    summary: 'an AI-assisted travel itinerary platform combining web scraping, video transcription, and itinerary building.',
    images: ['planefella.png'], video: 'https://youtu.be/iG4sZG4R9oI'
  },
  {
    id: 'respondr', icon: 'spatial', stack: ['swift', 'realitykit'], title: 'RespondR',
    subtitle: 'spatial emergency response',
    summary: 'an Apple Vision Pro and companion iPhone app combining LiDAR room scanning with a real-time fire outbreak simulation.', 
    images: ['respondr.png', 'respondr_2.png'], video: 'https://youtu.be/tbyR_Sqt9jw'
  },
];

export const skills = [
  ['TypeScript', 'typescript'], ['Java', 'java'], ['Go', 'go'], ['Swift', 'swift'], ['React', 'react'], ['Django', 'django'], ['FastAPI', 'api'], ['Flask', 'api'], ['PostgreSQL', 'database'], ['MongoDB', 'database'], ['Redis', 'database'], ['Docker', 'docker'], ['Kubernetes', 'network'], ['Jenkins', 'network'], ['Apache Kafka', 'network'], ['LangGraph', 'ai'], ['PyTorch', 'ai'], ['OpenAI', 'ai'], ['Microservices', 'network'], ['Event-driven architecture', 'network'],
];

export const terminalCommands = {
  help: 'available commands:\n  whoami              self-introduction\n  ls projects         list the project deck\n  cat education       print my education log\n  open <project>      open a project card\n  contact             jump to contact.exe\n  clear               clear the shell\n  exit                close the shell',
  whoami: 'kelly wang — final year cs @ nus; aspiring swe; builds full-stack web apps, ai systems',
  'ls projects': 'clockedit/\nsimfella/\ncerebro/\nsourceacademy/\nplanefella/\nrespondr/',
  'cat education': 'NUS / Computer Science / GPA 4.81\nDean’s List + ASEAN Undergraduate Merit Scholarship',
  contact: 'jumping to contact.exe; drop me a message!',
};
