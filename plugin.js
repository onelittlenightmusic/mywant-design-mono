// mywant-design-mono — a monochrome overlay design, installed as a MyWant custom
// (`mywant custom install onelittlenightmusic/mywant-design-mono`, kind "design").
//
// The GUI loads a design custom's plugin.js as a module after it starts; an
// overlay design may arrive late (the picker listens for it), so registering
// here is enough. The design's classes are this plugin's own, so it brings its
// stylesheet with it.

const CSS = `
.mwm-frame { background:#ffffff; border:2px solid #111827; border-radius:6px; overflow:hidden; box-shadow:4px 4px 0 #111827; }
.mwm-surface { background:#ffffff; border:2px solid #111827; }
.mwm-backdrop { background:rgba(255,255,255,.75); }
.mwm-cell { border:0; }
.mwm-interactive:hover { filter:invert(1); }
.mwm-off { opacity:.45; }
.mwm-disabled { background:#e5e7eb; opacity:.6; cursor:not-allowed; }
.mwm-focus { outline:3px solid #111827; outline-offset:-5px; }
.mwm-ink { background:#111827; }
.mwm-paper { background:#6b7280; }
.mwm-danger { background:#b91c1c; }
.mwm-label { color:#ffffff; font:700 10px/1 ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.06em; text-transform:lowercase; }
.mwm-header { display:flex; align-items:center; gap:6px; color:#111827; font:700 12px ui-monospace,SFMono-Regular,Menlo,monospace; text-transform:lowercase; }
.mwm-input { width:100%; border:2px solid #111827; border-radius:4px; padding:3px 8px; font:13px ui-monospace,SFMono-Regular,Menlo,monospace; color:#111827; background:#fff; outline:none; }
@keyframes mwm-in { from { opacity:0 } to { opacity:1 } }
`;

if (!document.getElementById('mwm-overlay-mono')) {
  const style = document.createElement('style');
  style.id = 'mwm-overlay-mono';
  style.textContent = CSS;
  document.head.appendChild(style);
}

window.__mywant.registerOverlayDesign({
  id: 'mono',
  name: 'Mono',
  // Meaning still reads — danger is the only colour; the rest is ink or grey.
  tones: {
    confirm: 'mwm-ink', cancel: 'mwm-paper', danger: 'mwm-danger', primary: 'mwm-ink', caution: 'mwm-paper',
    info: 'mwm-ink', accent: 'mwm-ink', special: 'mwm-ink', muted: 'mwm-paper',
  },
  disabled: 'mwm-disabled',
  cell: 'mwm-cell',
  cellInteractive: 'mwm-interactive',
  cellOff: 'mwm-off',
  focus: 'mwm-focus',
  label: 'mwm-label',
  header: 'mwm-header',
  surface: 'mwm-surface',
  frame: 'mwm-frame',
  tailColor: '#111827',
  backdrop: 'mwm-backdrop',
  input: 'mwm-input',
  enterAnimation: 'mwm-in 100ms linear forwards',
  cellEnterAnimation: 'mwm-in 100ms linear both',
  portable: {
    tones: {
      confirm: '#111827', cancel: '#6b7280', danger: '#b91c1c', primary: '#111827', caution: '#6b7280',
      info: '#111827', accent: '#111827', special: '#111827', muted: '#6b7280',
    },
    surface: '#ffffff', outline: '#111827', ink: '#111827',
    radius: 6, cellRadius: 0, cellGap: 2,
    labelTransform: 'lowercase', labelWeight: 700, labelSize: 10,
    backdrop: 'rgba(255,255,255,.75)',
  },
});
