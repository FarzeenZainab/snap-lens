import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react";
import { useRef } from "react";
import TagList from "./TagList";
import styles from "../styles/image-area.module.css";

const ImageArea = forwardRef(function ImageArea(props, ref) {
  let container;

  // image container
  const imgContainer = useRef();
  const [width, setWidth] = useState();

  // tags' list
  const [tags, setTags] = useState([
    {
      id: 1,
      xPosition: 108,
      yPosition: 252,
      width: 100,
      height: 300,
    },
  ]);

  // set the img width equal to the width of container on the first render
  useEffect(() => {
    container = imgContainer.current;
    setWidth(getComputedStyle(container).width);
  }, []);

  // Zoom in
  const zoomIn = () => {
    setWidth((curWidth) => {
      return Number.parseFloat(curWidth) + 100;
    });
  };

  // Zoom out
  const zoomOut = () => {
    setWidth((curWidth) => {
      return Number.parseFloat(curWidth) - 100;
    });
  };

  // using useImperativeHandle to change the behavior of the component when using forwardRef.
  // updating the internal state from parent component
  useImperativeHandle(ref, () => ({
    zoomIn: zoomIn,
    zoomOut: zoomOut,
  }));

  return (
    <>
      <div className={`${styles["image-area-container"]}`} ref={imgContainer}>
        <img
          src="/images/floor-plan.png"
          alt="uploaded image will be shown here"
          draggable="false"
          className={`${styles.img}`}
          width={width}
        />
        <TagList tagList={tags} />
      </div>
    </>
  );
});

export default ImageArea;
