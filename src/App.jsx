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

const readShellPreference = (key) => {
  try {
    return window.localStorage.getItem(key) === 'true';
  } catch {
    return false;
  }
};

const saveShellPreference = (key) => {
  try {
    window.localStorage.setItem(key, 'true');
  } catch {
    // The shell still works when browser storage is unavailable.
  }
};

const clearShellPreference = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // The shell still works when browser storage is unavailable.
  }
};

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalDiscovered, setTerminalDiscovered] = useState(() => readShellPreference('kelly-shell-discovered'));
  const [terminalTabDismissed, setTerminalTabDismissed] = useState(() => readShellPreference('kelly-shell-tab-dismissed'));
  const [openProject, setOpenProject] = useState(null);
  const [toast, setToast] = useState(false);
  const toggleProject = (id) => setOpenProject((current) => current === id ? null : id);
  const discoverTerminal = () => {
    setTerminalDiscovered(true);
    setTerminalTabDismissed(false);
    setTerminalOpen(true);
    saveShellPreference('kelly-shell-discovered');
    clearShellPreference('kelly-shell-tab-dismissed');
  };
  const dismissTerminalTab = () => {
    setTerminalTabDismissed(true);
    saveShellPreference('kelly-shell-tab-dismissed');
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); discoverTerminal(); }
      if (event.key === 'Escape') setTerminalOpen(false);
      if (event.key === 'Enter' && event.target === document.body) document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'));
      return undefined;
    }

    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    const trackScrollDirection = () => {
      const nextScrollY = window.scrollY;
      if (nextScrollY !== lastScrollY) scrollDirection = nextScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = nextScrollY;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle('reveal-from-above', scrollDirection === 'up');
          entry.target.classList.add('is-revealed');
        } else {
          const { top, bottom } = entry.boundingClientRect;
          const isOutsideViewportVertically = bottom <= 0 || top >= window.innerHeight;
          if (isOutsideViewportVertically && !entry.target.hasAttribute('data-reveal-once')) {
            entry.target.classList.remove('is-revealed');
          }
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    window.addEventListener('scroll', trackScrollDirection, { passive: true });
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', trackScrollDirection);
    };
  }, []);

  const stageMessage = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 4500);
  };

  return <>
    <main>
      <BootScreen onOpenTerminal={discoverTerminal} />
      <ProjectDeck openProject={openProject} onToggle={toggleProject} />
      <SystemLog />
      <section className="wrap" id="writing"><div className="section-head" data-reveal><div><div className="section-kicker">writing // build logs</div><h2>thoughts.md</h2></div><p className="section-intro">Short notes about the engineering decisions, debugging stories, and small details that do not fit inside a project bullet point.</p></div><div className="writing-grid">{posts.map(([date, title, meta], index) => <a className="post" href="#contact" key={title} data-reveal style={{ '--reveal-delay': `${index * 180}ms` }}><span className="post-date">{date}</span><h3>{title}</h3><span className="post-meta">{meta}</span></a>)}</div></section>
      <ContactExe onSubmit={stageMessage} />
    </main>
    <footer className="wrap" data-reveal><span>© 2026 Kelly Wang Sze Qing // built with curiosity</span><span><a href="https://github.com/kellywsq03" target="_blank" rel="noreferrer">github ↗</a> · <a href="https://www.linkedin.com/in/kelly-wang-sq/" target="_blank" rel="noreferrer">linkedin ↗</a></span><span><a href="#top">reboot ↑</a></span></footer>
    <Terminal isVisible={terminalOpen || (terminalDiscovered && !terminalTabDismissed)} isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} onOpen={() => setTerminalOpen(true)} onDismiss={dismissTerminalTab} onOpenProject={setOpenProject} />
    <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">Message staged. Connect your email endpoint to send it for real.</div>
  </>;
}
