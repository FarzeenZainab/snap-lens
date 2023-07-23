import React, { useRef, forwardRef, useEffect, useState } from "react";
import styles from "../styles/canvas.module.css";

const Canvas = forwardRef(function ({ height, width }, ref) {
  const canvas = useRef();
  const [context, setContext] = useState(null);
  const [start, setStart] = useState({ x: null, y: null });

  useEffect(() => {
    setContext(canvas.current.getContext("2d"));
  }, []);

  /**
   * Event we use
   * Mouse down =>
   * Mouse up =>
   * Mouse move => draws a temporary/ondemand rectangle on the canvas when mouse moves on the canvas.
   */

  // get mouse position relative to the canvas
  const getMousePos = (element, e, w, h) => {
    const rect = element.current.getBoundingClientRect();

    // calculate the mouse position relative to the canvas (right now mouse position is relative to the viewport)
    return {
      x: ((e.clientX - rect.left) * w) / rect.width,
      y: ((e.clientY - rect.top) * h) / rect.height,
    };
  };

  // start
  const startRect = (e) => {
    setStart(getMousePos(canvas, e, width, height));
  };

  // end
  const endRect = (e) => {
    setStart({ x: null, y: null });
  };

  const handleMouseMove = (e) => {
    // This function will keep triggering when the mouse moves on the canvas
    // 1. Get mouse x, y position that is relative to the canvas
    // 2. Create context and begin path using context.beginPath()
    // 3. Create a new rect
    // 4. Give a stroke
    if (start.x) {
      let { x, y } = getMousePos(canvas, e, width, height);
      console.log(x, y);
      context.beginPath();
      context.rect(start.x, start.y, x - start.x, y - start.y);
      context.fill();
    }
  };

  return (
    <>
      <canvas ref={canvas} id="canvas" width={width} height={height} className={`${styles.canvas}`} onMouseMove={handleMouseMove} onMouseDown={startRect} onMouseUp={endRect}></canvas>
    </>
  );
});

export default Canvas;

// Psuedo code
/**
 * 1. Create a react component out of <canvas> element
 *
 * 2. Use this component with props and to the image resolution and aspect ratio i.e width & height (will research later)
 *
 * 3. Use ref to to refer to the canvas
 *
 * 4. Create canvas context using useEffect hook
 */
