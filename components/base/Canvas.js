import React, { useRef } from "react";
import styles from "../styles/canvas.module.css";

function Canvas({ height }) {
  const canvas = useRef();

  // create Tag
  const createTag = () => {
    /**
     * Mouse down event
     * 1. On mouse down get the x and y position
     * 2. start selecting area of the image
     */
  };

  const saveTag = () => {
    console.log("save tag");
  };

  return (
    <canvas
      ref={canvas}
      id="canvas"
      className={`${styles.canvas} h-[${height}px]`}
    ></canvas>
  );
}

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
