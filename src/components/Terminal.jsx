import { useEffect, useRef, useState } from 'react';
import { terminalCommands } from '../data/portfolio';
import '../styles/Terminal.css';

export default function Terminal({ isVisible, isOpen, onClose, onOpen, onDismiss, onOpenProject, contactEnabled }) {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const initializedRef = useRef(false);
  const terminalRef = useRef(null);
  const dragRef = useRef(null);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([]);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (isOpen) {
      if (!initializedRef.current) {
        setLines([{ text: 'Type “help” to explore. Try “open clockedit”.', kind: 'command' }]);
        initializedRef.current = true;
      }
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !outputRef.current) return;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [isOpen, lines]);

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
      const found = ['clockedit', 'simfella', 'cerebro', 'sourceacademy', 'planefella', 'respondr'].includes(id);
      next.push({ text: found ? `Opening ${id} in the project deck.` : 'project not found. Try “open clockedit”.', kind: 'output' });
      if (found) { onOpenProject(id); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }
    } else if (normalized === 'contact' && !contactEnabled) {
      next.push({ text: 'contact.exe is currently offline.', kind: 'output' });
    } else if (terminalCommands[normalized] !== undefined) {
      next.push({ text: terminalCommands[normalized], kind: 'output' });
      if (normalized === 'contact') document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    } else next.push({ text: `command not found: ${normalized}. Type “help” for the map.`, kind: 'output' });
    setLines((current) => [...current, ...next]);
    setInput('');
  };

  const startDrag = (event) => {
    if (!isOpen || event.button !== 0 || !window.matchMedia('(min-width: 641px)').matches || event.target.closest('button')) return;
    const bounds = terminalRef.current.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      startX: bounds.left,
      startY: bounds.top,
      width: bounds.width,
      height: bounds.height,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const drag = (event) => {
    const current = dragRef.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - current.pointerX;
    const deltaY = event.clientY - current.pointerY;
    if (!current.moved && Math.hypot(deltaX, deltaY) <= 4) return;
    current.moved = true;
    setPosition({
      x: Math.min(Math.max(0, current.startX + deltaX), Math.max(0, window.innerWidth - current.width)),
      y: Math.min(Math.max(0, current.startY + deltaY), Math.max(0, window.innerHeight - current.height)),
    });
  };

  const finishDrag = (event) => {
    const current = dragRef.current;
    if (!current || current.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
    if (!current.moved) onClose();
  };

  const cancelDrag = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
  };

  if (!isVisible) return null;

  return (
    <div ref={terminalRef} className={`terminal ${isOpen ? 'is-open' : 'is-closed'} ${position ? 'has-position' : ''}`} style={position ? { '--terminal-x': `${position.x}px`, '--terminal-y': `${position.y}px` } : undefined}>
      <div className="terminal-window" role={isOpen ? 'dialog' : undefined} aria-labelledby={isOpen ? 'terminal-title' : undefined}>
        {isOpen ? <>
          <div className="terminal-head" onPointerDown={startDrag} onPointerMove={drag} onPointerUp={finishDrag} onPointerCancel={cancelDrag}><span id="terminal-title">kelly@portfolio:~</span><button className="terminal-close" type="button" onClick={onClose} aria-label="Close terminal">×</button></div>
          <div ref={outputRef} className="terminal-output">{lines.map((line, index) => <div className={`terminal-line ${line.kind}`} key={`${line.text}-${index}`}>{line.text}</div>)}</div>
          <form className="terminal-form" onSubmit={submit}><span>visitor@kelly.dev $</span><input ref={inputRef} className="terminal-input" value={input} onChange={(event) => setInput(event.target.value)} autoComplete="off" aria-label="Terminal command" placeholder="type help" /></form>
        </> : <div className="terminal-collapsed-bar"><button className="terminal-reopen" type="button" onClick={onOpen} aria-label="Open interactive shell"><span>kelly@portfolio:~</span><span aria-hidden="true">⌃</span></button><button className="terminal-dismiss" type="button" onClick={onDismiss} aria-label="Hide shell tab">×</button></div>}
      </div>
    </div>
  );
}
