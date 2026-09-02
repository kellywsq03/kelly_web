import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const timers = bootLines.map((_, index) => window.setTimeout(() => setVisibleLineCount(index + 1), 250 + index * 3000));
    timers.push(window.setTimeout(() => setIsReady(true), 450 + bootLines.length * 3000 + 2000));
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <section className="wrap hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">aspiring swe // final year cs @ nus</div>
          <p className="hero-copy">i’m <strong>kelly wang sze qing</strong>, an aspiring software engineer with a strong interest in full-stack ai-native systems.</p>
          <div className="hero-actions">
            <button className="button dark" type="button" onClick={onOpenTerminal}>open shell<span>⌘K</span></button>
          </div>
        </div>
        <div className="boot-screen" aria-label="Retro computer welcome panel">
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
        </div>
      </div>
    </section>
  );
}
