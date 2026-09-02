import PixelIcon from './PixelIcon';
import { skills } from '../data/portfolio';

const entries = [
  ['2023 → 2027', 'NUS / Bachelor of Computing in Computer Science', 'GPA 4.81 / 5.00 · Dean’s List · ASEAN Undergraduate Merit Scholarship'],
  ['2026 → now', 'Singapore Power Group / Full-Stack Developer Intern', 'React, TypeScript, Django, Python, Go, Kafka, Kubernetes, LLM observability'],
  ['2024 → 2025', 'NUS / Teaching Assistant, Programming Methodology II', '10 weeks of Java labs for 25 CS undergraduates'],
  ['2023 → now', 'RC4 / Finance Secretary + Creatives Director', 'Five-figure budget · team of 6 · community of 600 residents'],
];

export default function SystemLog() {
  return (
    <section className="wrap" id="experience">
      <div className="section-head"><div><div className="section-kicker">system // person.log</div><h2>about.sys</h2></div><p className="section-intro">The resume facts are still there, but presented as a living system: education, work, leadership, and the tools I reach for most.</p></div>
      <div className="split-grid">
        <article className="retro-panel profile-panel"><div className="panel-head"><span>person.log</span><span>status: curious</span></div><div className="panel-body"><h3>curiosity is a feature.</h3><p>I like going deep enough into a problem to understand what the computer is actually doing — then making the result easier for someone else to use.</p><div className="project-meta"><span className="tag">systems thinker</span><span className="tag">kind teammate</span><span className="tag">python enjoyer</span></div></div></article>
        <article className="retro-panel terminal-log"><div className="panel-head"><span>education_and_work.log</span><span>tail -f</span></div><div className="panel-body log-lines">{entries.map(([date, role, note]) => <div className="log-entry" key={role}><time>{date}</time><div><strong>{role}</strong><span>{note}</span></div></div>)}</div></article>
      </div>
      <div className="skills-panel"><div className="panel-head"><span>skill_matrix.json</span><span>python-first environment</span></div><div className="skills-inner"><div className="primary-language"><div className="skill-card-icon"><PixelIcon kind="python" /></div><small>primary_language</small><h3>Python</h3><p>because readable code is a love language.</p></div><div className="skill-cloud">{skills.map(([skill, icon]) => <div className="tag" key={skill}><PixelIcon kind={icon} /><span>{skill}</span></div>)}</div></div></div>
    </section>
  );
}
