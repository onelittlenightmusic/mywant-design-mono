# mywant-design-mono

A [MyWant](https://github.com/onelittlenightmusic/MyWant) custom that adds
**Mono**, a monochrome overlay design.

Every menu and dialog in the MyWant GUI — a card's long-press actions,
Shift+Enter, yes/no questions, the board's bubbles — and the header's control
pill are drawn from one overlay library, and how they look is a *design* you
pick. Mono draws them in ink and paper: black and grey tiles, a hard offset
shadow, lower-case monospace words, and red kept for the one thing that cannot
be taken back.

## Install

```sh
mywant custom install onelittlenightmusic/mywant-design-mono
```

The GUI picks it up on its next load. No canvas extension is needed.

## Use

Open **Settings → Overlay Design** and choose **Mono**. With the canvas
(mywant-guiex) installed, the same choice is also in your character's display
settings.

The choice is saved on your character, together with Mono's portable values,
so the browser extension and the bookmarklet draw their menus and pill in
Mono on other pages too. Without a character, it is kept in the browser.

## Uninstall

```sh
mywant custom uninstall mywant-design-mono
```

A choice that names a design that is no longer installed falls back to the
built-in Grid.

## How it is made

One file, `plugin.js`. The GUI loads a design custom's plugin as a module
(served from `~/.mywant/design-plugin/<name>/plugin.js`), and it registers the
design with `window.__mywant.registerOverlayDesign(...)`:

- **class names** for everything the design draws in the app, with the
  stylesheet that defines them injected by the plugin itself — the app's
  Tailwind build only has the classes the app uses;
- **`portable`** values — colours per tone, radii, gap, how labels are
  written — for the browser extension and the bookmarklet, where the
  plugin's stylesheet is not loaded.

See the [developer docs](https://onelittlenightmusic.github.io/mywant-gui-dev/overlays/designs)
for the `OverlayDesign` type and the tones.
