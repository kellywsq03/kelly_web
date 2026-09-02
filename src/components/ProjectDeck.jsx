import PixelIcon from './PixelIcon';
import { projects } from '../data/portfolio';
import './ProjectDeck.css';

export default function ProjectDeck({ openProject, onToggle }) {
  return (
    <section className="wrap" id="projects">
      <div className="section-head"><div><div className="section-kicker">projects // click a process</div><h2>work.exe</h2></div><p className="section-intro">A deliberately non-uniform project stack. Click any card to expand the technical story; the deck gives your eye a sense of discovery before asking for details.</p></div>
      <div className={`projects-deck ${openProject ? 'has-open' : ''}`}>
        {projects.map((project) => (
          <article key={project.id} className={`project-card ${openProject === project.id ? 'is-open' : ''}`} tabIndex="0" onClick={() => onToggle(project.id)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onToggle(project.id); } }}>
            <div className="project-top"><span className="project-icon"><PixelIcon kind={project.icon} /></span><span><strong>{project.label}</strong></span><span>{project.stack}</span></div>
            <h3>{project.title}</h3><p>{project.summary}</p>
            <div className="project-meta">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><span className="project-hint">[ click to inspect ]</span>
            <div className="project-details">{project.details.map(([label, value]) => <div key={label}><div className="detail-label">{label}</div><div className="detail-value">{value}</div></div>)}</div>
          </article>
        ))}
      </div>
      <p className="deck-note">tip: if this were a real terminal, I’d run <span>cat project/*.md</span> next.</p>
    </section>
  );
}
