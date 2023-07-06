import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";
import Button from "../components/base/Button";
import { useRef } from "react";

import styles from "../components/styles/canvas.module.css";

export default function Index() {
  const imgArea = useRef();

  const zoomIn = () => {
    imgArea.current.zoomIn();
  };

  const zoomOut = () => {
    imgArea.current.zoomOut();
  };

  const drawTag = () => {
    console.log("start drawing");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="main-layout">
        <div className="mb-3 flex justify-end">
          <Button label="Zoom-in" iconClass="icon-zoom-in" onClick={zoomIn} />
          <Button
            label="Zoom-out"
            iconClass="icon-zoom-out"
            className="lg"
            onClick={zoomOut}
          />
        </div>
        <Card>
          <canvas
            id="canvas"
            className={`${styles.canvas}`}
            onClick={drawTag}
          ></canvas>
          <ImageArea ref={imgArea} />
        </Card>
      </div>
    </div>
  );
}
