export default function RetroNav({ onOpenTerminal }) {
  return (
    <div className="nav-shell">
      <header className="wrap nav-bar">
        <a className="brand" href="#top" aria-label="Kelly Wang home"><span className="brand-mark">K</span><span>kelly_wang.dev</span></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">projects()</a><a href="#experience">experience()</a><a href="#writing">logs()</a><a href="#contact">contact()</a>
        </nav>
        <button className="nav-action" type="button" onClick={onOpenTerminal}>terminal [⌘K]</button>
      </header>
    </div>
  );
}
