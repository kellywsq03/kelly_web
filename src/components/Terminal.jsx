import { useEffect, useRef, useState } from 'react';
import { terminalCommands } from '../data/portfolio';

export default function Terminal({ isOpen, onClose, onOpenProject }) {
  const inputRef = useRef(null);
  const initializedRef = useRef(false);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (isOpen) {
      if (!initializedRef.current) {
        setLines([{ text: 'Welcome to kelly.dev // v2.', kind: 'output' }, { text: 'Type “help” to explore. Try “open clockedit”.', kind: 'output' }]);
        initializedRef.current = true;
      }
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  const submit = (event) => {
    event.preventDefault();
    const raw = input.trim();
    if (!raw) return;
    const normalized = raw.toLowerCase();
    if (normalized === 'exit') { setInput(''); onClose(); return; }
    if (normalized === 'clear') { setLines([]); setInput(''); return; }
    const next = [{ text: `$ ${raw}`, kind: 'command' }];
    if (normalized.startsWith('open ')) {
      const id = normalized.slice(5).trim().replace(/[^a-z0-9-]/g, '');
      const found = ['clockedit', 'simfella', 'power-grid-copilot', 'java-slang', 'planefella', 'respondr'].includes(id);
      next.push({ text: found ? `Opening ${id} in the project deck.` : 'project not found. Try “open clockedit”.', kind: 'output' });
      if (found) { onOpenProject(id); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }
    } else if (terminalCommands[normalized] !== undefined) {
      next.push({ text: terminalCommands[normalized], kind: 'output' });
      if (normalized === 'contact') document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    } else next.push({ text: `command not found: ${normalized}. Type “help” for the map.`, kind: 'output' });
    setLines((current) => [...current, ...next]);
    setInput('');
  };

  if (!isOpen) return null;
  return (
    <div className="terminal is-open" role="dialog" aria-modal="true" aria-labelledby="terminal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="terminal-window"><div className="terminal-head"><span id="terminal-title">kelly@portfolio:~ // interactive shell</span><button className="terminal-close" type="button" onClick={onClose} aria-label="Close terminal">×</button></div>
      <div className="terminal-output">{lines.map((line, index) => <div className={`terminal-line ${line.kind}`} key={`${line.text}-${index}`}>{line.text}</div>)}</div>
      <form className="terminal-form" onSubmit={submit}><span>visitor@kelly.dev $</span><input ref={inputRef} className="terminal-input" value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" aria-label="Terminal command" placeholder="type help" /></form></div>
    </div>
  );
}
