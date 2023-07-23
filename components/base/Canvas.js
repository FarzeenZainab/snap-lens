import React, { useRef, forwardRef, useEffect, useState } from "react";
import styles from "../styles/canvas.module.css";

const Canvas = forwardRef(function ({ height, width }, ref) {
  const canvas = useRef();
  const [context, setContext] = useState(null);
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const [start, setStart] = useState({ x: null, y: null });
  const [isActive, setIsActive] = useState(false);
  const [dimension, setDimension] = useState({ width: "0px", height: "0px" });
  const [isMirrored, setIsMirrored] = useState({ x: false, y: false });

  useEffect(() => {
    setContext(canvas.current.getContext("2d"));
  }, []);

  const getMousePos = (e) => {
    const rect = canvas.current.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) * width) / rect.width,
      y: ((e.clientY - rect.top) * height) / rect.height,
    };
  };

  const startRect = (e) => {
    setIsActive(true);
    setStart(getMousePos(e));
    setMousePos(getMousePos(e));
  };

  const endRect = (e) => {
    setStart({ x: null, y: null });
    setDimension({ width: "0px", height: "0px" });
    setIsActive(false);
  };

  const handleMouseMove = (e) => {
    if (start.x) {
      let { x, y } = getMousePos(e);
      let width = x - start.x;
      let height = y - start.y;

      let xMirror = width < 0;
      let yMirror = height < 0;

      setIsMirrored({ x: xMirror, y: yMirror });

      if (xMirror) {
        x = start.x + width;
      }

      if (yMirror) {
        y = start.y + height;
      }

      setDimension({ width: Math.abs(width) + "px", height: Math.abs(height) + "px" });
      setMousePos({ x, y });
    }
  };

  return (
    <>
      {isActive && (
        <div
          className={styles.rectangle}
          style={{
            position: "absolute",
            left: isMirrored.x ? start.x - parseInt(dimension.width) : start.x,
            top: isMirrored.y ? start.y - parseInt(dimension.height) : start.y,
            width: dimension.width,
            height: dimension.height,
            backgroundColor: "rgba(255, 0, 0, 0.5)", // Transparent red
            transform: `scaleX(${isMirrored.x ? -1 : 1}) scaleY(${isMirrored.y ? -1 : 1})`, // Apply mirroring
          }}
        ></div>
      )}
      <canvas ref={canvas} id="canvas" width={width} height={height} className={`${styles.canvas}`} onMouseMove={handleMouseMove} onMouseDown={startRect} onMouseUp={endRect}></canvas>
    </>
  );
});

export default Canvas;
