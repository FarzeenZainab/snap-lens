import React, { useRef, forwardRef, useEffect, useState } from "react";
import styles from "../styles/canvas.module.css";

const Canvas = forwardRef(function ({ height, width }, ref) {
  const canvas = useRef();
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // on first render
  useEffect(() => {
    setContext(canvas.current.getContext("2d")); // updates the context state so the value is not undefined for functions
  }, []);

  // create Tag
  const createTag = () => {
    setIsDrawing(true);

    context.beginPath();
    context.rect(10, 20, 200, 200); //(x, y, w, h)
    context.fill();
  };

  const saveTag = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvas}
      id="canvas"
      width={width}
      height={height}
      className={`${styles.canvas}`}
      onMouseDown={createTag}
      onMouseUp={saveTag}
    ></canvas>
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
