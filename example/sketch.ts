import type { Sketch, SketchSettings } from "ssam";

export const sketch: Sketch<"2d"> = ({ wrap, canvas, context: ctx }) => {
  const circles = Array.from({ length: 500 }, (_, i) => ({
    diam: Math.random() * 3 + 6,
    color: `hsl(${(i / 500) * 60}, ${Math.sin(i) * 50 + 50}%, 50%)`,
  }));

  const handleClick = () => {
    const h = (Math.random() * 360) | 0;
    circles.forEach((_, i) => {
      circles[i].color =
        `hsl(${(i / 500) * h}, ${Math.sin(i) * 50 + 50}%, 50%)`;
    });
  };
  canvas.addEventListener("click", handleClick);

  wrap.render = ({ width, height, playhead }) => {
    ctx.fillStyle = `black`;
    ctx.fillRect(0, 0, width, height);

    circles.forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(
        (i / circles.length) * width,
        height / 2 +
          (Math.sin(i) * height) / 4 +
          (Math.sin(playhead * Math.PI * 2 + i * 0.01) * height) / 8 +
          (Math.sin(i + playhead * Math.PI * 2) * height) / 10,
        c.diam,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = c.color;
      ctx.fill();
    });
  };

  wrap.resize = ({ width, height }) => {
    console.log(width, height);
  };

  wrap.unload = () => {
    canvas.removeEventListener("click", handleClick);
  };
};

export const settings: SketchSettings = {
  // dimensions: [800, 800],
  // scaleToParent: false,
  duration: 4_000,
  hotkeys: false,
};
