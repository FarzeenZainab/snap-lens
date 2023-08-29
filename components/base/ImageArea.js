import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";

import Canvas from "../base/Canvas";
import styles from "../styles/image-area.module.css";
import { useGlobalTags } from "../../context/TagsContext";

const ImageArea = forwardRef(function ImageArea(props, ref) {
  // refs
  const imgContainerRef = useRef();
  const imageRef = useRef();
  const container = imgContainerRef.current;
  const scaleFactor = 1.2;

  // states
  const [imgWidth, setImgWidth] = useState();
  const [height, setHeight] = useState();
  const { state: tags, dispatch } = useGlobalTags();

  // on first render
  useEffect(() => {
    const container = imgContainerRef.current;
    const image = imageRef.current;
    const newWidth = container.getBoundingClientRect().width;
    setImgWidth(newWidth);
    setHeight(image.offsetHeight);
  }, []);

  // recalculate height when image width changes
  useEffect(() => {
    const image = imageRef.current;
    setHeight(image.offsetHeight);
  }, [imgWidth]);

  // Zoom in
  const zoomIn = () => {
    setImgWidth((curWidth) => curWidth * scaleFactor); // multiply a fixed increment for zooming
    dispatch({ type: "ZOOM_IN", scaleFactor: scaleFactor });
  };

  // Zoom out
  const zoomOut = () => {
    if (imgWidth > container.offsetWidth / scaleFactor) {
      setImgWidth((curWidth) => curWidth / scaleFactor); // divide a fixed increment for zooming
      dispatch({ type: "ZOOM_OUT", scaleFactor: scaleFactor });
    } else {
      return;
    }
  };

  // using useImperativeHandle to change the behavior of the component when using forwardRef.
  // updating the internal state from parent component
  useImperativeHandle(ref, () => ({
    zoomIn: zoomIn,
    zoomOut: zoomOut,
  }));

  return (
    <div
      className={`${styles["image-area-container"]} ${props.className}`}
      ref={imgContainerRef}
    >
      <Canvas height={height} width={imgWidth} />
      <img
        ref={imageRef}
        src="/images/floor-plan.png"
        alt="uploaded image will be shown here"
        draggable="false"
        className={`${styles.img} p-0 m-0`}
        width={imgWidth}
        onLoad={() => {
          setHeight(imageRef.current.offsetHeight);
        }}
      />
    </div>
  );
});

export default ImageArea;
