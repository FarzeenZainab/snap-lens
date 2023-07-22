import React, { useRef, forwardRef, useEffect, useState } from "react";
import styles from "../styles/canvas.module.css";

const Canvas = forwardRef(function ({ height, width }, ref) {
  const canvas = useRef();
  const [context, setContext] = useState(null);

  /**
   * Event we use
   * Mouse down =>
   * Mouse up =>
   * Mouse move => draws a temporary/ondemand rectangle on the canvas when mouse moves on the canvas.
   */

  // get mouse position relative to the canvas
  const getMousePos = () => {};

  const handleMouseMove = (e) => {
    // This function will keep triggering when the mouse moves on the canvas
    // 1. Get mouse x, y position that is relative to the canvas
    // 2. Create context and begin path using context.beginPath()
    // 3. Create a new rect
    // 4. Give a stroke

    const rect = canvas.current.getBoundingClientRect();
    const start = 

    // calculate the mouse position relative to the canvas (right now mouse position is relative to the viewport)
    let x = ((e.clientX - rect.left) * width) / rect.width;
    let y = ((e.clientY - rect.top) * height) / rect.height;

    // create context
    context.beginPath();
    context.rect(x, y);
  };

  return (
    <>
      <canvas
        ref={canvas}
        id="canvas"
        width={width}
        height={height}
        className={`${styles.canvas}`}
        onMouseMove={handleMouseMove}
        onMouseDown={getMousePos}
      ></canvas>
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
