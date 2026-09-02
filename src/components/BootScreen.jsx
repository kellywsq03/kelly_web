import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import '../styles/BootScreen.css';

const portrait = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠶⢦⡀⠀⠀⢀⣀⡀⠀⠀
⠀⠀⠀⣀⣤⣄⡀⠀⠀⠀⠀⠀⠀⢠⠖⠒⢆⠀⠀⠀⡏⠀⠀⠀⠙⣇⡞⠋⠙⢿⣷⠀
⠀⠀⢀⡟⠁⠉⠛⣧⠀⠀⠀⠀⣠⠇⠀⠀⠈⢇⠀⢸⠁⠀⠀⠀⠀⡟⠀⠀⠀⠀⣿⠃
⠀⠀⣾⠃⠀⠀⠀⠈⠁⠒⠊⠉⠁⠀⠀⠀⠀⠘⢢⡈⡆⠀⠀⠀⣰⠃⠀⠀⠀⠀⡟⠀
⠀⣀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠋⠙⠲⡄⠀⠁⠀⠀⠀⢀⣞⠁⠀
⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⡼⠁⠀⠀⠀⢧⠀⠀⠀⠀⠐⠋⠀⢱⡀
⡇⠀⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠃⠀⣏⠀⠸⣄⡤⠇⠀⠀⢀⡞⠀⠀⠀⢠⠇
⡇⠀⠀⠀⠉⠀⠀⢠⠀⣠⣄⣰⠀⠀⠀⠀⠀⠈⢧⡀⠀⠀⠀⠀⠀⢸⡀⠀⠀⡰⠃⠀
⠙⣄⠀⠀⠀⠀⠀⠈⠛⠁⠀⠀⠀⠀⠀⣀⣀⣴⠿⠃⠀⠀⠀⠀⠀⢀⡛⠒⠚⠁⠀⠀
⠀⠈⠳⠤⣀⣀⣀⣀⣀⣠⡤⠤⠔⠒⠈⠁⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡖⠦⠤⣄⣀⡤⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡞⠁⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⢠⡛⣆⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠸⣇⣀⣴⢀⣧⠀⠀⠀⠀⠀⠀⠀⢀⡏⠣⣈⠙⠉⢁⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠉⠈⡇⢰⠒⠒⠒⢺⣠⠏⠀⠀⠈⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⠚⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
       `;

const logo = `
░██░██     ░██            ░██ ░██            
   ░██    ░██             ░██ ░██            
░██░██   ░██    ░███████  ░██ ░██ ░██    ░██ 
░██░███████    ░██    ░██ ░██ ░██ ░██    ░██ 
░██░██   ░██   ░█████████ ░██ ░██ ░██    ░██ 
░██░██    ░██  ░██        ░██ ░██ ░██   ░███ 
░██░██     ░██  ░███████  ░██ ░██  ░█████░██ 
                                         ░██ 
                                   ░███████  
                                    

`;

const bootLines = [
  ['./welcome.exe', true, 'is-command'],
  ['executing welcome.exe...', false, 'is-execution'],
  ['BOOTING KELLY.DEV...', true],
  ['loading curiosity.... [ok]'],
  ['loading thoughts... [ok]'],
];

const skillCategories = {
  Python: 'language', TypeScript: 'language', Java: 'language', Go: 'language', Swift: 'language',
  React: 'framework', Django: 'framework', FastAPI: 'framework', Flask: 'framework',
  PostgreSQL: 'data', MongoDB: 'data', Redis: 'data',
  Docker: 'cicd', Kubernetes: 'cicd', Jenkins: 'cicd',
  LangGraph: 'ai', PyTorch: 'ai', OpenAI: 'ai',
  'Apache Kafka': 'systems', Microservices: 'systems', 'Event-driven architecture': 'systems',
};

const skillMatrix = [['Python', 'language'], ...skills.map(([skill]) => [skill, skillCategories[skill] ?? 'systems'])];

function SkillPills({ active, sorted, onSort }) {
  const arenaRef = useRef(null);
  const pillRefs = useRef([]);

  useEffect(() => {
    if (!active || sorted || !arenaRef.current) return undefined;
    const arena = arenaRef.current;
    let pointer = null;
    let frame;
    let particles = [];

    const placeParticles = () => {
      const { width, height } = arena.getBoundingClientRect();
      particles = pillRefs.current.map((pill, index) => {
        const pillWidth = pill.offsetWidth;
        const pillHeight = pill.offsetHeight;
        return {
          x: ((index * 71) % Math.max(1, width - pillWidth)),
          y: ((index * 43) % Math.max(1, height * .55 - pillHeight)),
          width: pillWidth,
          height: pillHeight,
          vx: 0,
          vy: 0,
        };
      });
    };

    const move = (event) => {
      const bounds = arena.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };
    const clearPointer = () => { pointer = null; };

    const step = () => {
      const { width, height } = arena.getBoundingClientRect();
      particles.forEach((particle) => {
        const centerX = particle.x + particle.width / 2;
        const centerY = particle.y + particle.height / 2;

        if (pointer) {
          const deltaX = centerX - pointer.x;
          const deltaY = centerY - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);
          if (distance < 185) {
            const force = (185 - distance) / 185 * 4.2;
            particle.vx += deltaX / Math.max(distance, 1) * force;
            particle.vy += deltaY / Math.max(distance, 1) * force;
          }
        }

        particle.vy += .075;
        particle.vx *= .992;
        particle.vy *= .994;
        particle.x += particle.vx;
        particle.y += particle.vy;

      });

      particles.forEach((particle, index) => {
        particles.slice(index + 1).forEach((other) => {
          const overlapX = Math.min(particle.x + particle.width, other.x + other.width) - Math.max(particle.x, other.x);
          const overlapY = Math.min(particle.y + particle.height, other.y + other.height) - Math.max(particle.y, other.y);
          if (overlapX <= 0 || overlapY <= 0) return;

          if (overlapX < overlapY) {
            const direction = particle.x + particle.width / 2 < other.x + other.width / 2 ? -1 : 1;
            const separation = overlapX / 2 + .5;
            particle.x += direction * separation;
            other.x -= direction * separation;
            [particle.vx, other.vx] = [other.vx * .45, particle.vx * .45];
          } else {
            const direction = particle.y + particle.height / 2 < other.y + other.height / 2 ? -1 : 1;
            const separation = overlapY / 2 + .5;
            particle.y += direction * separation;
            other.y -= direction * separation;
            [particle.vy, other.vy] = [other.vy * .35, particle.vy * .35];
          }
        });
      });

      particles.forEach((particle, index) => {
        const maxX = Math.max(0, width - particle.width);
        const maxY = Math.max(0, height - particle.height);
        if (particle.x < 0 || particle.x > maxX) {
          particle.x = Math.max(0, Math.min(maxX, particle.x));
          particle.vx *= -.45;
        }
        if (particle.y < 0 || particle.y > maxY) {
          particle.y = Math.max(0, Math.min(maxY, particle.y));
          particle.vy *= -.32;
        }
        pillRefs.current[index].style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0)`;
      });
      frame = window.requestAnimationFrame(step);
    };

    placeParticles();
    arena.addEventListener('pointermove', move);
    arena.addEventListener('pointerleave', clearPointer);
    frame = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(frame);
      arena.removeEventListener('pointermove', move);
      arena.removeEventListener('pointerleave', clearPointer);
    };
  }, [active, sorted]);

  return <>
    <button className="skill-sort-button" type="button" onClick={onSort}>{sorted ? 'scatter pills' : 'sort pills'}</button>
    <div className={`skill-pills ${sorted ? 'is-sorted' : ''}`} ref={arenaRef}>
      {skillMatrix.map(([skill, category], index) => <span className={`skill-pill is-${category}`} ref={(node) => { pillRefs.current[index] = node; }} key={skill}>{skill}</span>)}
    </div>
  </>;
}

export default function BootScreen({ onOpenTerminal }) {
  const [visibleLineCount, setVisibleLineCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [openWindow, setOpenWindow] = useState(null);
  const [bootRun, setBootRun] = useState(0);
  const [skillsSorted, setSkillsSorted] = useState(false);

  useEffect(() => {
    setVisibleLineCount(0);
    setIsReady(false);
    const beforeFirstLnDelay = 250;
    const betweenLnDelay = 1500;
    const afterLastLnDelay = 2000;
    const timers = bootLines.map((_, index) => window.setTimeout(() => setVisibleLineCount(index + 1), beforeFirstLnDelay + index * betweenLnDelay));
    timers.push(window.setTimeout(() => setIsReady(true), beforeFirstLnDelay + bootLines.length * betweenLnDelay + afterLastLnDelay));
    return () => timers.forEach(window.clearTimeout);
  }, [bootRun]);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpenWindow(null);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!event.target.closest('.desktop-folder')) setOpenWindow(null);
    };
    document.addEventListener('click', closeOnOutsideClick);
    return () => document.removeEventListener('click', closeOnOutsideClick);
  }, []);

  useEffect(() => {
    if (openWindow === 'boot') setBootRun((run) => run + 1);
  }, [openWindow]);

  useEffect(() => {
    if (openWindow === 'skills') setSkillsSorted(false);
  }, [openWindow]);

  const toggleWindow = (windowName) => setOpenWindow((current) => current === windowName ? null : windowName);
  const onCardKeyDown = (event, windowName) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleWindow(windowName);
    }
  };

  return (
    <section className={`wrap hero ${openWindow ? 'has-open-window' : ''}`} id="top">
      <p className="folder-hint">open a file to explore_</p>
      <div
        className={`desktop-folder ${openWindow ? 'is-docked' : ''}`}
        aria-label="Welcome folder"
        onClick={() => { if (openWindow) setOpenWindow(null); }}
      >
        <div className="folder-tab">kelly.dev</div>
        <div className="folder-face" aria-hidden="true" />
        <article
          className={`boot-screen folder-window ${openWindow === 'boot' ? 'is-open' : ''}`}
          aria-label="Retro computer welcome panel"
          tabIndex="0"
          onClick={(event) => { event.stopPropagation(); toggleWindow('boot'); }}
          onKeyDown={(event) => onCardKeyDown(event, 'boot')}
        >
          <div className="window-bar"><span>welcome.exe</span><span className="window-lights" aria-hidden="true"><i /><i /><i /></span></div>
          <div className="boot-body">
            <div className="boot-copy">
              <div className={`boot-lines ${isReady ? 'is-complete' : ''}`} aria-live="polite">
                {bootLines.slice(0, visibleLineCount).map(([line, highlighted, className]) => <div className={`boot-line ${className ?? ''}`} style={{ '--characters': line.length }} key={line}>{highlighted ? <b>{line}</b> : line}</div>)}
              </div>
              <div className={`boot-status ${isReady ? 'is-ready' : ''}`} aria-hidden={!isReady}>
                <div><b>USER: kellywsq03</b></div><br></br><div><b>MODE: </b>open_to_work</div><br></br><div><b>AVAILABLE:</b></div><div>sep_26_to_jun_27  // intern</div><div>jun_27 // full-time</div>
              </div>
            </div>
            <div className="ghost" aria-label="Friendly ASCII portrait of Kelly with long wavy hair"><pre>{portrait}</pre><small>hi, I’m Kelly.</small></div>
          </div>
          <div className="boot-prompt">press [enter] to explore_</div>
        </article>
        <article
          className={`intro-window folder-window ${openWindow === 'intro' ? 'is-open' : ''}`}
          aria-label="About Kelly"
          tabIndex="0"
          onClick={(event) => { event.stopPropagation(); toggleWindow('intro'); }}
          onKeyDown={(event) => onCardKeyDown(event, 'intro')}
        >
          <div className="window-bar"><span>about_me.txt</span><span className="window-lights" aria-hidden="true"><i /><i /><i /></span></div>
          <div className="intro-body">
            <div className="eyebrow">aspiring swe // final year cs @ nus</div>
            <p className="hero-copy">i’m <strong>kelly wang sze qing</strong>, an aspiring software engineer with a strong interest in full-stack ai-native systems.</p>
            <div className="hero-actions">
              <button className="button dark" type="button" onClick={(event) => { event.stopPropagation(); onOpenTerminal(); }}>open shell<span>⌘K</span></button>
            </div>
          </div>
        </article>
        <article
          className={`skills-window folder-window ${openWindow === 'skills' ? 'is-open' : ''}`}
          aria-label="Skill matrix"
          tabIndex="0"
          onClick={(event) => { event.stopPropagation(); toggleWindow('skills'); }}
          onKeyDown={(event) => onCardKeyDown(event, 'skills')}
        >
          <div className="window-bar"><span>skill_matrix.json</span><span className="window-lights" aria-hidden="true"><i /><i /><i /></span></div>
          <div className="skills-body">
            <div className="skills-title"><span>Hover to repel pills</span><span>cursor field: active</span></div>
            <SkillPills active={openWindow === 'skills'} sorted={skillsSorted} onSort={(event) => { event.stopPropagation(); setSkillsSorted((sorted) => !sorted); }} />
          </div>
        </article>
      </div>
    </section>
  );
}
