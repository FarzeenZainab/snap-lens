import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";
import Button from "../components/base/Button";
import { useRef } from "react";

export default function Index() {
  const imgArea = useRef();

  const zoomIn = () => {
    imgArea.current.zoomIn();
  };

  const zoomOut = () => {
    imgArea.current.zoomOut();
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
          <ImageArea ref={imgArea} />
        </Card>
      </div>
    </div>
  );
}
