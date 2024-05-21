# ssam-react

Use [Ssam.js](https://github.com/cdaein/ssam) sketch in React apps.

> ⚠️ This is an early version. If you find any issues, please report using the Issues tab.

## Installation

```sh
npm i ssam-react
```

## How-to

Write a Ssam.js sketch as usual and export both `sketch` and `settings`:

```ts
// sketch.ts

export const sketch: Sketch<"2d"> = ({ wrap, context }) => {
  wrap.render = ({ width, height }) => {
    // ...
  };
};

export const settings: SketchSettings = {
  duration: 6_000,
  // ...
};
```

In your React app, import `<SsamReact>` component and pass the `sketch` and `settings` props:

```jsx
// App.tsx

import SsamReact from "ssam-react";
import { sketch, settings } from "./sketch";

export function default App() {
  return (
    <>
      <OtherStuff />
      <SsamReact sketch={sketch} settings={settings} />
    <>
  )
}
```

## Notes

- When `settings.dimensions` is not set (`undefined`), Ssam will use scale to its parent element's width and height. Make sure to set the width and height of the parent element.
- If you want the fixed size Ssam canvas, set `settings.scaleToParent` to `false`.
- Known issue: Even with clean up, event listeners are registered twice in `React.Strict` (is that normal?).

## License

MIT
