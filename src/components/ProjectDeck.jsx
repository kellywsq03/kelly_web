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
  return (
    <section className="wrap" id="projects">
      <div className="section-head" data-reveal><div><div className="section-kicker">projects // click a process</div><h2>projects.exe</h2></div></div>
      <div className={`projects-deck ${openProject ? 'has-open' : ''}`}>
        {projects.map((project, index) => (
          <article key={project.id} className={`project-card ${openProject === project.id ? 'is-open' : ''}`} data-reveal style={{ '--reveal-delay': `${index * 180}ms` }} tabIndex="0" onClick={() => onToggle(project.id)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onToggle(project.id); } }}>
            <div className="project-top"><span className="project-icon"><PixelIcon kind={project.icon} /></span><span></span></div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
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
      <p className="deck-note" data-reveal>tip: if this were a real terminal, I’d run <span>cat project/*.md</span> next.</p>
    </section>
  );
}
