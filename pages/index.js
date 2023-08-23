import React, { useRef } from "react";
import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";
import Button from "../components/base/Button";
import DescriptionInput from "../components/base/DescriptionInput";
import TagsDescriptionList from "../components/base/TagsDescriptionList";
import { TagsProvider } from "../context/TagsContext";
import { IsEditingProvider } from "../context/IsEditing";

export default function Index() {
  const imgArea = useRef();

  const zoomIn = () => {
    imgArea.current.zoomIn();
  };

  const zoomOut = () => {
    imgArea.current.zoomOut();
  };

  return (
    <IsEditingProvider>
      <TagsProvider>
        <div className="container mx-auto p-4">
          <div className="main-layout">
            <div className="mb-3 flex justify-end">
              <Button
                label="Zoom-in"
                iconClass="icon-zoom-in"
                onClick={zoomIn}
              />
              <Button
                label="Zoom-out"
                iconClass="icon-zoom-out"
                className="lg"
                onClick={zoomOut}
              />
            </div>
            <div className="flex justify-between gap-x-4">
              <Card className="w-[calc(100%-400px)]">
                <ImageArea ref={imgArea} />
              </Card>
              <div className="tags-content p-4">
                <div className="relative h-[80vh] overflow-y-auto -mr-4 pr-4">
                  <DescriptionInput />
                  <TagsDescriptionList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TagsProvider>
    </IsEditingProvider>
  );
}
