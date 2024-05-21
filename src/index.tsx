import { useEffect, useRef } from "react";
import { Sketch, SketchMode, SketchSettings, Wrap, ssam } from "ssam";

type Props<Mode extends SketchMode> = {
  /** Ssam `sketch` function */
  sketch: Sketch<Mode>;
  /** Ssam `settings` object */
  settings: SketchSettings;
};

/**
 * @param props - `{ sketch, settings }`
 * @returns `<canvas ref={ssamCanvasRef} />`
 */
export default function Ssam(props: Props<SketchMode>) {
  const { sketch, settings } = props;

  const ssamCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<Wrap<SketchMode> | null>(null);

  useEffect(() => {
    const createWrap = async () => {
      const wrap = await ssam(sketch, {
        ...settings,
        canvas: ssamCanvasRef.current!,
      });
      wrapRef.current = wrap;
    };
    createWrap().catch(console.error);

    return () => {
      // FIX:
      // even with clean up, event listeners are registered twice in React.Strict
      wrapRef.current?.dispose();
      wrapRef.current?.unloadCombined();
    };
  }, [ssamCanvasRef, wrapRef, sketch, settings]);

  return <canvas ref={ssamCanvasRef} />;
}
