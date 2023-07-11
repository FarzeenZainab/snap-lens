import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
} from "react";

import TagList from "./TagList";
import Canvas from "../base/Canvas";

import styles from "../styles/image-area.module.css";

const ImageArea = forwardRef(function ImageArea(props, ref) {
  // refs
  const imgContainerRef = useRef();
  const imageRef = useRef(); // source element ref
  const canvasRef = useRef(); // target element ref

  // refs' current

  const [imgWidth, setImgWidth] = useState();
  const [height, setHeight] = useState();

  // tags' list
  const [tags, setTags] = useState([
    {
      id: 1,
      title: "Garage Area Size (23-5 x 23-5)",
      xPosition: 108,
      yPosition: 252,
      width: 100,
      height: 300,
    },
  ]);

  // on first render
  useEffect(() => {
    const container = imgContainerRef.current;
    const image = imageRef.current;
    setImgWidth(container.getBoundingClientRect().width);
    setHeight(image.offsetHeight);
  }, []);

  // when image width changes
  useEffect(() => {
    const image = imageRef.current;
    setHeight(image.offsetHeight);
  }, [imgWidth]);

  // Zoom in
  const zoomIn = () => {
    setImgWidth((curWidth) => {
      return Number.parseFloat(curWidth) + 100;
    });
  };

  // Zoom out
  const zoomOut = () => {
    setImgWidth((curWidth) => {
      return Number.parseFloat(curWidth) - 100;
    });
  };

  useImperativeHandle(ref, () => ({
    zoomIn: zoomIn,
    zoomOut: zoomOut,
  }));

  return (
    <div className={`${styles["image-area-container"]}`} ref={imgContainerRef}>
      <Canvas height={height} width={imgWidth} ref={canvasRef} />
      <img
        ref={imageRef}
        src="/images/floor-plan.png"
        alt="uploaded image will be shown here"
        draggable="false"
        className={`${styles.img} p-0 m-0`}
        width={imgWidth}
      />
      {/* <TagList tagList={tags} /> */}
    </div>
  );
});

export default ImageArea;

// set height of the canvas same as image
/**
 * What we need is the height of the image
 * set the height of the canvas equal to the height of the image on first render
 * on zoom in - update the height of the image & canvas with the new height of the image
 * on zoom out - update the height of the image & canvas with the new height of the image
 */

// using useImperativeHandle to change the behavior of the component when using forwardRef.
// updating the internal state from parent component
