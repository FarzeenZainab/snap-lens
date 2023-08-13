import React, { useRef, useState } from "react";
import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";
import Button from "../components/base/Button";
import { TagsProvider } from "../context/index";
import TagsTitleList from "../components/base/TagsTitleList";

export default function Index() {
  const imgArea = useRef();

  const zoomIn = () => {
    imgArea.current.zoomIn();
  };

  const zoomOut = () => {
    imgArea.current.zoomOut();
  };

  return (
    <TagsProvider>
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
          <div className="flex justify-between gap-x-4">
            <Card className="w-[calc(100%-400px)]">
              <ImageArea ref={imgArea} />
            </Card>
            <div className="tags-content p-4">
              <form className="flex items-center">
                <input
                  className="appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter tag description here..."
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save
                </button>
              </form>
              {/* <TagsTitleList /> */}
            </div>
          </div>
        </div>
      </div>
    </TagsProvider>
  );
}
