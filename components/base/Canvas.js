import React, { useRef, forwardRef, useEffect, useState } from "react";
import TagList from "./TagList";
import styles from "../styles/canvas.module.css";
import { useGlobalTags } from "../../context/TagsContext";
import { useIsEditing } from "../../context/IsEditing";

const Canvas = forwardRef(function ({ height, width }, ref) {
  const canvasRef = useRef(null);
  const [start, setStart] = useState({});
  const [isDrawing, setIsDrawing] = useState(false);

  const { state: tags, dispatch } = useGlobalTags();
  const { state: isEditing, dispatch: setISEditing } = useIsEditing();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.getContext("2d");
  }, []);

  const getMousePos = (canvas, e) => {
    // gives dimensions of the canvas relative to the viewport, which allows us to calculate the correct mouse position on the account taking into account any scaling or resizing the canvas
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) * canvas.width) / rect.width,
      y: ((e.clientY - rect.top) * canvas.height) / rect.height,
    };
  };

  // starting action
  function startRect(e) {
    if (isEditing) {
      return;
    }
    setIsDrawing(true);
    setStart(getMousePos(canvasRef.current, e));
  }

  // ending action
  function endRect(e) {
    draw();
    if (isDrawing) {
      let { x, y } = getMousePos(canvasRef.current, e);
      const newTag = {
        id: tags.length + 1,
        x: start.x,
        y: start.y,
        width: x - start.x,
        height: y - start.y,
      };
      setIsDrawing(false);

      if (newTag.width === 0 || newTag.height === 0) {
        return;
      } else {
        setISEditing({ type: true });
        dispatch({ type: "ADD_NEW_TAG", payload: newTag });
      }
    }
  }

  // draw rectangle
  // This is called to render all the drawn rectangle on the canvas
  function draw() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // clear everthing from the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // moving action
  const handleMouseMove = (e) => {
    if (isDrawing) {
      draw();
      let { x, y } = getMousePos(canvasRef.current, e);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.beginPath();
      context.rect(start.x, start.y, x - start.x, y - start.y);
      context.strokeStyle = "red";
      context.stroke();
      context.fill();
    }
  };

  return (
    <>
      <TagList tagList={tags} />

      <canvas
        ref={canvasRef}
        id="canvas"
        width={width}
        height={height}
        className={`${styles.canvas} ${isEditing && "cursor-not-allowed"}`}
        onMouseMove={handleMouseMove}
        onMouseDown={startRect}
        onMouseUp={endRect}
      ></canvas>
    </>
  );
});

export default Canvas;
