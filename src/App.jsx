import { useEffect, useState } from 'react';
import './App.css';
import RetroNav from './components/RetroNav';
import BootScreen from './components/BootScreen';
import ProjectDeck from './components/ProjectDeck';
import SystemLog from './components/SystemLog';
import ContactExe from './components/ContactExe';
import Terminal from './components/Terminal';

const posts = [
  ['2026.02.14', 'What I wish I knew before my first real project', '6 min / engineering'],
  ['2026.01.30', 'Making a terminal UI welcoming instead of intimidating', '4 min / interfaces'],
  ['2025.12.08', 'Three tiny details that made a side project feel finished', '3 min / craft'],
];

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);
  const [toast, setToast] = useState(false);
  const toggleProject = (id) => setOpenProject((current) => current === id ? null : id);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setTerminalOpen(true); }
      if (event.key === 'Escape') setTerminalOpen(false);
      if (event.key === 'Enter' && event.target === document.body) document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const stageMessage = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 4500);
  };

  return <>
    <main>
      <BootScreen onOpenTerminal={() => setTerminalOpen(true)} />
      <ProjectDeck openProject={openProject} onToggle={toggleProject} />
      <SystemLog />
      <section className="wrap" id="writing"><div className="section-head"><div><div className="section-kicker">writing // build logs</div><h2>thoughts.md</h2></div><p className="section-intro">Short notes about the engineering decisions, debugging stories, and small details that do not fit inside a project bullet point.</p></div><div className="writing-grid">{posts.map(([date, title, meta]) => <a className="post" href="#contact" key={title}><span className="post-date">{date}</span><h3>{title}</h3><span className="post-meta">{meta}</span></a>)}</div></section>
      <ContactExe onSubmit={stageMessage} />
    </main>
    <footer className="wrap"><span>© 2026 Kelly Wang Sze Qing // built with curiosity</span><span><a href="https://github.com/kellywsq03" target="_blank" rel="noreferrer">github ↗</a> · <a href="https://www.linkedin.com/in/kelly-wang-sq/" target="_blank" rel="noreferrer">linkedin ↗</a></span><span><a href="#top">reboot ↑</a></span></footer>
    <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} onOpenProject={setOpenProject} />
    <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">Message staged. Connect your email endpoint to send it for real.</div>
  </>;
}
