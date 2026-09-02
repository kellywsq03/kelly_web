import { useEffect, useState } from 'react';
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
  ['BOOTING KELLY.DEV...', true],
  ['loading curiosity.... [ok]'],
  ['loading python..... [ok]'],
  ['loading experience.... [ok]'],
];

export default function BootScreen({ onOpenTerminal }) {
  const [visibleLineCount, setVisibleLineCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [openWindow, setOpenWindow] = useState(null);
  const [bootRun, setBootRun] = useState(0);

  useEffect(() => {
    setVisibleLineCount(0);
    setIsReady(false);
    const beforeFirstLnDelay = 250;
    const betweenLnDelay = 3000;
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

  const toggleWindow = (windowName) => setOpenWindow((current) => current === windowName ? null : windowName);
  const onCardKeyDown = (event, windowName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleWindow(windowName);
    }
  };

  return (
    <section className={`wrap hero ${openWindow ? 'has-open-window' : ''}`} id="top">
      <p className="folder-hint">open a file to explore_</p>
      <div className={`desktop-folder ${openWindow ? 'is-docked' : ''}`} aria-label="Welcome folder">
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
                {bootLines.slice(0, visibleLineCount).map(([line, highlighted]) => <div className="boot-line" style={{ '--characters': line.length }} key={line}>{highlighted ? <b>{line}</b> : line}</div>)}
              </div>
              <div className={`boot-status ${isReady ? 'is-ready' : ''}`} aria-hidden={!isReady}>
                <div><b>USER: kellywsq03</b></div><div><b>MODE: </b>open_to_work</div><div><b>AVAILABLE:</b></div><div>sep_26_to_jun_27 // intern</div><div>jun_27 // full-time</div>
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
      </div>
    </section>
  );
}
