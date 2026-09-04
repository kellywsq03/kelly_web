---
name: portfolio-scroll-reveal
description: Add or update visible React UI components in this portfolio while preserving its bidirectional staggered scroll-reveal animation. Use for new sections, cards, panels, content rows, and prominent page elements; exclude overlays and persistent navigation unless requested.
---

# Portfolio scroll reveals

New prominent page components should participate in the existing scroll animation.

- Add `data-reveal` to the component's stable outer DOM element. The observer in `src/App.jsx` supplies `is-revealed` and `reveal-from-above`; do not reproduce that logic locally.
- For sibling groups, stagger items with ``style={{ '--reveal-delay': `${index * 180}ms` }}``. For a single secondary element, use `180ms` only when it should follow the preceding element.
- Use `data-reveal-once` only when the element should remain visible after its first reveal. The normal behavior must replay upward and downward.
- Put `data-reveal` on a stable wrapper when React also changes the component's `className`. React state-driven class updates can overwrite observer-added classes and make an interactive component disappear. If no wrapper is appropriate, preserve revealed state in React as `ProjectDeck` does.
- Do not apply scroll reveals to modals, toasts, sticky navigation, or controls that must appear immediately.
- Reuse the CSS in `src/App.css`; do not add competing opacity, `translate`, or reveal keyframes to individual components.
- Confirm the component appears when scrolling down and up, and remains visible through selection, expansion, and collapse. Run `npm run build` after editing.
