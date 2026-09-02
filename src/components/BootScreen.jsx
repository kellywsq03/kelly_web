const portrait = `       .------.
     .'  ^  ^  '.
    /      ᴗ     \\
   |     \\___/    |
    \\             /
     '.  /||\\  .'
       / || \\
      /  ||  \\
     /___||___\\`;

const logo = `██   ██ ███████ ██      ██      ██    ██   ██     ██████  ███████ ██    ██
██  ██  ██      ██      ██       ██  ██    ██     ██   ██ ██      ██    ██
█████   █████   ██      ██        ████     ██     ██   ██ █████   ██    ██
██  ██  ██      ██      ██         ██      ██     ██   ██ ██       ██  ██
██   ██ ███████ ███████ ███████    ██      ███████ ██████  ███████   ████`;

export default function BootScreen({ onOpenTerminal }) {
  return (
    <section className="wrap hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">software engineer // penultimate cs undergrad @ nus</div>
          <h1>hello,<br /><span>i build.</span></h1>
          <p className="hero-copy">I’m <strong>Kelly Wang Sze Qing</strong> — a software engineer who enjoys building systems that are technically deep, useful to real people, and occasionally a little weird.</p>
          <div className="hero-actions">
            <a className="button" href="#work">run ls projects ↘</a>
            <button className="button dark" type="button" onClick={onOpenTerminal}>open interactive shell <span>⌘K</span></button>
          </div>
        </div>
        <div className="boot-screen" aria-label="Retro computer welcome panel">
          <div className="window-bar"><span>kelly_os / welcome.exe</span><span className="window-lights" aria-hidden="true"><i /><i /><i /></span></div>
          <div className="boot-body">
            <div className="boot-lines"><div><b>BOOTING KELLY.DEV...</b></div><div>loading curiosity ........ [ok]</div><div>loading python ........... [ok]</div><div>loading good questions .... [ok]</div><div>loading tiny experiments .. [ok]</div><br /><div><b>USER: kelly_wsq03</b></div><div>MODE: aspiring_swe</div><div>STATUS: open to opportunities</div></div>
            <div className="ghost" aria-label="Friendly ASCII portrait of Kelly with long wavy hair"><pre>{portrait}</pre><small>hi, I’m Kelly.</small></div>
          </div>
          <pre className="ascii-name" aria-label="Kelly dot dev">{logo}</pre><div className="boot-prompt">press [enter] to explore_</div>
        </div>
      </div>
    </section>
  );
}
