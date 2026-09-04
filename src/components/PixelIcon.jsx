import '../styles/PixelIcon.css';

const paths = {
  code: <><rect x="3" y="5" width="26" height="22" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M13 15 9 18l4 3m6-6 4 3-4 3" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  react: <><circle cx="16" cy="16" r="3" fill="currentColor" /><ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(120 16 16)" /></>,
  database: <path d="M6 7h20v6H6zm0 6h20v6H6zm0 6h20v6H6z" fill="none" stroke="currentColor" strokeWidth="2" />,
  network: <><path d="M10 10 22 16 10 22M10 10v12M22 16v6" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="5" y="5" width="6" height="6" fill="currentColor" /><rect x="21" y="13" width="6" height="6" fill="currentColor" /><rect x="5" y="21" width="6" height="6" fill="currentColor" /></>,
  travel: <path d="m16 4 3 8 8 4-8 4-3 8-3-8-8-4 8-4z" fill="currentColor" />,
  spatial: <><rect x="5" y="10" width="22" height="12" fill="none" stroke="currentColor" strokeWidth="3" /><rect x="10" y="14" width="4" height="4" fill="currentColor" /><rect x="18" y="14" width="4" height="4" fill="currentColor" /></>,
  python: <path d="M7 5h12v4h4v10h-4v4H7v-4H3V9h4zM25 11h4v12h-4v4H13v-4h-4V13h4v8h12z" fill="currentColor" />,
  github: <path d="M16 3a13 13 0 0 0-4 25.4v-3.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.4.8 1.1.8 2.2v4.2A13 13 0 0 0 16 3Z" fill="currentColor" />,
  linkedin: <><rect x="5" y="12" width="5" height="15" fill="currentColor" /><rect x="5" y="5" width="5" height="5" fill="currentColor" /><path d="M14 12h5v2c1-1.6 3-2.6 5.1-2.3 3.1.4 3.9 2.7 3.9 6.3v9h-5v-8c0-1.9-.4-3.2-2-3.2-2.2 0-2 2.1-2 3.2v8h-5Z" fill="currentColor" /></>,
  file: <><path d="M7 3h12l6 6v20H7Z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M19 3v7h6M11 16h10M11 21h10" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  download: <><path d="M16 4v16m-6-6 6 6 6-6M6 24v5h20v-5" fill="none" stroke="currentColor" strokeWidth="2.5" /></>,
};

export default function PixelIcon({ kind = 'code' }) {
  return <svg className="pixel-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false" shapeRendering="crispEdges">{paths[kind] ?? paths.code}</svg>;
}
