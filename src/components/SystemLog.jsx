import { useEffect, useRef, useState } from 'react';
import folderGraphic from '../assets/figma-folder.svg';
import thought from '../data/thoughts.md?raw';
import '../styles/SystemLog.css';

const entries = [
  ['2023 → 2027', 'NUS / Bachelor of Computing in Computer Science', 'GPA 4.81 / 5.00 · Dean’s List · ASEAN Undergraduate Merit Scholarship'],
  ['2026 → now', 'Singapore Power Group / Full-Stack Developer Intern', 'React, TypeScript, Django, Python, Go, Kafka, Kubernetes, LLM observability'],
  ['2024 → 2025', 'NUS / Teaching Assistant, Programming Methodology II', '10 weeks of Java labs for 25 CS undergraduates'],
  ['2023 → now', 'RC4 / Finance Secretary + Creatives Director', 'Five-figure budget · team of 6 · community of 600 residents'],
];

export default function SystemLog() {
  const [thoughtOpen, setThoughtOpen] = useState(false);
  const [thoughtPosition, setThoughtPosition] = useState(null);
  const closeButtonRef = useRef(null);
  const thoughtWindowRef = useRef(null);
  const thoughtDragRef = useRef(null);

  useEffect(() => {
    if (!thoughtOpen) return undefined;

    closeButtonRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setThoughtOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [thoughtOpen]);

  const startThoughtDrag = (event) => {
    if (event.button !== 0 || event.target.closest('button')) return;
    const bounds = thoughtWindowRef.current.getBoundingClientRect();
    thoughtDragRef.current = {
      pointerId: event.pointerId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      startX: bounds.left,
      startY: bounds.top,
      width: bounds.width,
      height: bounds.height,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const dragThought = (event) => {
    const current = thoughtDragRef.current;
    if (!current || current.pointerId !== event.pointerId) return;
    setThoughtPosition({
      x: Math.min(Math.max(0, current.startX + event.clientX - current.pointerX), Math.max(0, window.innerWidth - current.width)),
      y: Math.min(Math.max(0, current.startY + event.clientY - current.pointerY), Math.max(0, window.innerHeight - current.height)),
    });
  };

  const finishThoughtDrag = (event) => {
    if (thoughtDragRef.current?.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    thoughtDragRef.current = null;
  };

  const cancelThoughtDrag = (event) => {
    if (thoughtDragRef.current?.pointerId === event.pointerId) thoughtDragRef.current = null;
  };

  return (
    <>
      <section className="wrap" id="experience">
        <div className="section-head" data-reveal><div className="terminal-section-heading"><div className="typed-kicker-shell about-kicker-shell"><div className="section-kicker typed-kicker about-kicker">system // person.log</div></div><h2 className="section-title-pill" data-reveal style={{ '--reveal-delay': '180ms' }}>about.sys</h2></div></div>
        <div className="split-grid">
          <article className="retro-panel profile-panel" data-reveal><div className="panel-head"><span>person.log</span><span>status: curious</span></div><div className="panel-body"><h3>view my thoughts</h3><button className="thought-folder" type="button" onClick={() => setThoughtOpen(true)} aria-haspopup="dialog"><img src={folderGraphic} alt="" aria-hidden="true" /><span>thoughts.md</span></button></div></article>
          <article className="retro-panel terminal-log" data-reveal style={{ '--reveal-delay': '180ms' }}><div className="panel-head"><span>education_and_work.log</span><span>tail -f</span></div><div className="panel-body log-lines">{entries.map(([date, role, note]) => <div className="log-entry" key={role}><time>{date}</time><div><strong>{role}</strong><span>{note}</span></div></div>)}</div></article>
        </div>
      </section>
      {thoughtOpen && <div ref={thoughtWindowRef} className={`thought-window ${thoughtPosition ? 'has-position' : ''}`} style={thoughtPosition ? { '--thought-window-x': `${thoughtPosition.x}px`, '--thought-window-y': `${thoughtPosition.y}px` } : undefined} role="dialog" aria-modal="false" aria-labelledby="thought-window-title"><div className="thought-window-shell"><div className="thought-window-head" onPointerDown={startThoughtDrag} onPointerMove={dragThought} onPointerUp={finishThoughtDrag} onPointerCancel={cancelThoughtDrag}><span id="thought-window-title">kelly@portfolio:~/data/thoughts.md</span><button ref={closeButtonRef} type="button" onClick={() => setThoughtOpen(false)} aria-label="Close thoughts window">×</button></div><pre className="thought-window-content">{thought}</pre></div></div>}
    </>
  );
}
