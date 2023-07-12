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
  const imageRef = useRef();
  const canvasRef = useRef();
  const container = imgContainerRef.current;
  const image = imageRef.current;

  // states
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
    const image = imageRef.current;
    setImgWidth(container.getBoundingClientRect().width);
    setHeight(image.offsetHeight);
  }, []);

  // recalculate height when image width changes
  useEffect(() => {
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
    if (image.offsetWidth > container.offsetWidth) {
      setImgWidth((curWidth) => {
        return Number.parseFloat(curWidth) - 100;
      });
    } else {
      setImgWidth(container.offsetWidth);
    }
  };

  // using useImperativeHandle to change the behavior of the component when using forwardRef.
  // updating the internal state from parent component
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
        onLoad={() => {
          setHeight(imageRef.current.offsetHeight);
        }}
      />
      {/* <TagList tagList={tags} /> */}
    </div>
  );
});

export default ImageArea;

// set height of the canvas same as image
/**
 * we need the height of the image
 * set the height of the canvas equal to the height of the image on first render
 * add 2nd useEffect with the dependency of width, that recalculates the height when width changes
 */
