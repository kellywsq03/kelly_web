# Kelly Wang — retro portfolio V2

This is a Vite + React portfolio for a retro computer/terminal-inspired SWE portfolio.

## Open it

```bash
npm ci
npm run dev
```

## GitHub Pages

Push to `main` to deploy automatically through the GitHub Actions workflow. In the
repository's **Settings → Pages**, set **Source** to **GitHub Actions**. The site is
published at `https://kellywsq03.github.io/kelly_web/`.

## V2 direction

- Retro computer UI as the primary visual language, not just a terminal overlay.
- Helvetica/Arial for readable body copy; `Lomo Copy Mezzo` is attempted first for display copy, with Courier New as the safe fallback.
- CRT scanlines, vignette, glow, dense mono labels, rectangular controls, bright green/pink/orange accents, and layered drop shadows.
- Boot/welcome panel with a friendly animated ASCII portrait of Kelly and `KELLY.DEV` ASCII treatment.
- Left-to-right project deck: tall portrait cards overlap and rotate into a fan; click or keyboard-focus a card to expand its technical details.
- Skills are presented as a horizontally scrolling row of rounded, solid-colour rectangles with editable inline pixel SVGs for Python, TypeScript, Java, Go, React, databases, AI, and infrastructure.
- Pixel icon styling references Streamline's [Pixel icon family](https://www.streamlinehq.com/icons/pixel). The open-source Pixel vectors are documented under CC BY 4.0; swap the inline SVGs in `pixelIcon()` for official exports if you want exact artwork.
- Real project content is based on Kelly's resume: ClockedIt, Simfella, Power Grid Copilot, java-slang, PlaneFella, and RespondR.
- Python is treated as the primary-language identity while still showing the broader stack.

## Interaction map

- `⌘K` / `Ctrl+K`: open the interactive terminal.
- Terminal commands: `help`, `whoami`, `ls projects`, `cat education`, `python`, `open clockedit`, `contact`, `clear`, `exit`.
- Project cards: click, press Enter, or press Space to expand one card at a time.
- Contact form: demo-only submit state; connect Formspree, Resend, or your own API route before shipping.
- Reduced motion: animation transitions are suppressed with `prefers-reduced-motion`.

## Suggested production split

```text
app/page.tsx
components/RetroNav.tsx
components/BootScreen.tsx
components/ProjectDeck.tsx
components/Terminal.tsx
components/SystemLog.tsx
components/ContactExe.tsx
styles/tokens.css
```

Keep the CSS custom properties in `:root` as your first design-token file. The most important tokens are `--black`, `--paper`, `--green`, `--pink`, `--orange`, `--mint`, `--line`, and `--shadow`.
