import { useEffect, useState } from 'react';
import PixelIcon from './PixelIcon';
import { projects } from '../data/portfolio';
import '../styles/ProjectDeck.css';

const projectImageModules = import.meta.glob('../assets/projects/*', {
  eager: true,
  import: 'default',
  query: '?url',
});

const getProjectImage = (fileName) => {
  if (/^https?:\/\//.test(fileName)) return fileName;
  return projectImageModules[`../assets/projects/${fileName}`];
};

const getYouTubeId = (url) => url?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/)?.[1];

export default function ProjectDeck({ openProject, onToggle }) {
  const [revealedProjects, setRevealedProjects] = useState(() => new Set());

  const revealAndToggle = (projectId) => {
    setRevealedProjects((current) => {
      if (current.has(projectId)) return current;
      const next = new Set(current);
      next.add(projectId);
      return next;
    });
    onToggle(projectId);
  };

  useEffect(() => {
    if (!openProject) return;
    const selectedCard = document.querySelector(`[data-project-id="${openProject}"]`);
    if (!selectedCard) return;
    const deck = selectedCard.closest('.projects-deck');
    if (!deck) return;
    const targetLeft = selectedCard.offsetLeft - (deck.clientWidth - selectedCard.offsetWidth) / 2;
    deck.scrollTo({ left: targetLeft, behavior: 'auto' });
  }, [openProject]);

  return (
    <section className="wrap" id="projects">
      <div className="section-head" data-reveal data-reveal-once><div className="project-heading"><div className="project-kicker-shell"><div className="section-kicker project-kicker">projects // click a process</div></div><h2 className="project-title-button" data-reveal style={{ '--reveal-delay': '180ms' }}><PixelIcon kind="file" />projects.exe</h2></div></div>
      <div className={`projects-deck ${openProject ? 'has-open' : ''}`}>
        {projects.map((project, index) => (
          <article key={project.id} className={`project-card ${openProject === project.id ? 'is-open' : ''} ${revealedProjects.has(project.id) ? 'is-revealed' : ''}`} data-project-id={project.id} data-reveal style={{ '--reveal-delay': `${index * 180}ms` }} tabIndex="0" onClick={() => revealAndToggle(project.id)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); revealAndToggle(project.id); } }}>
            <div className="project-top"><span className="project-icon"><PixelIcon kind={project.icon} /></span><span></span></div>
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-summary">{project.summary}</p>
            <div className="project-meta">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><span className="project-hint">[ click to inspect ]</span>
            {(project.images?.length || project.video) && (
              <div className="project-details">
                {project.images?.length > 0 && <div className="project-media-grid">{project.images.map((fileName, imageIndex) => {
                  const imageUrl = getProjectImage(fileName);
                  return imageUrl ? <img src={imageUrl} alt={`${project.title} screenshot ${imageIndex + 1}`} loading="lazy" key={fileName} /> : null;
                })}</div>}
                {project.video && (() => {
                  const videoId = getYouTubeId(project.video);
                  return (
                    <a className="project-video" href={project.video} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`Watch ${project.title} video on YouTube`}>
                      {videoId && <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={`${project.title} video thumbnail`} loading="lazy" />}
                      <span className="project-video-play" aria-hidden="true">▶</span>
                      <span>watch demo ↗</span>
                    </a>
                  );
                })()}
              </div>
            )}
          </article>
        ))}
      </div>
      <p className="deck-note" data-reveal>tip: i'd open a shell <span>⌘K</span> and run <span>open {"<project>"}</span> instead!</p>
    </section>
  );
}
