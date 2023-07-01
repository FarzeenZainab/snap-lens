import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react";
import { useRef } from "react";
import styles from "../styles/image-area.module.css";

const ImageArea = forwardRef(function ImageArea(props, ref) {
  const imgContainer = useRef();
  let container;
  const [width, setWidth] = useState();

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

  useImperativeHandle(ref, () => ({
    zoomIn: zoomIn,
    zoomOut: zoomOut,
  }));

  // Zoom out
  const zoomOut = () => {
    setWidth((curWidth) => {
      return Number.parseFloat(curWidth) - 100;
    });
  };

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
      </div>
    </>
  );
});

export default ImageArea;
