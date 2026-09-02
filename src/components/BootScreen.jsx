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

export default function BootScreen({ onOpenTerminal }) {
  return (
    <section className="wrap hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">aspiring swe // final year cs @ nus</div>
          <p className="hero-copy">i’m <strong>kelly wang sze qing</strong>, an aspiring software engineer with a strong interest in full-stack ai-native systems.</p>
          <div className="hero-actions">
            <a className="button" href="#projects">ls projects ↘</a>
            <button className="button dark" type="button" onClick={onOpenTerminal}>open interactive shell <span>⌘K</span></button>
          </div>
        </div>
        <div className="boot-screen" aria-label="Retro computer welcome panel">
          <div className="window-bar"><span>welcome.exe</span><span className="window-lights" aria-hidden="true"><i /><i /><i /></span></div>
          <div className="boot-body">
            <div className="boot-lines"><div><b>BOOTING KELLY.DEV...</b></div><div>loading curiosity.... [ok]</div><div>loading python..... [ok]</div><div>loading experience.... [ok]</div><br /><div><b>USER: kellywsq03</b></div><div><b>MODE:</b> open_to_work</div><div><b>AVAILABLE:</b> sep_26_to_jun_27 // intern</div><div>jun_27 // full-time</div></div>
            <div className="ghost" aria-label="Friendly ASCII portrait of Kelly with long wavy hair"><pre>{portrait}</pre><small>hi, I’m Kelly.</small></div>
          </div>
          <pre className="ascii-name" aria-label="Kelly dot dev">{logo}</pre><div className="boot-prompt">press [enter] to explore_</div>
        </div>
      </div>
    </section>
  );
}
