import React, { useRef, useState } from "react";
import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";
import Button from "../components/base/Button";

export default function Index() {
  const imgArea = useRef();
  const [tags, setTags] = useState([]);

  const zoomIn = () => {
    imgArea.current.zoomIn();
  };

  const zoomOut = () => {
    imgArea.current.zoomOut();
  };

  // handle new tag
  const handleNewTag = (tag) => {};

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
        <div className="flex justify-between gap-x-4">
          <Card className="w-[calc(100%-400px)]">
            <ImageArea
              ref={imgArea}
              tags={tags}
              setTags={setTags}
              handleNewTag={handleNewTag}
            />
          </Card>
          <div className="tags-content p-4">
            <form class="flex items-center">
              <input
                class="appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter tag description here..."
              />
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </form>

            <div className="tags-content-list">
              <div className="bg-gray-50 p-4 mt-4 rounded-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac facilisis eros. Sed pellentesque scelerisque augue non
                  varius. Sed ultricies erat at urna fermentum malesuada. Nulla
                  eget lectus auctor, rhoncus urna eu, convallis velit. Etiam
                  non turpis turpis. Cras dapibus risus eu eros blandit, vel
                  pellentesque enim iaculis. Nulla id massa libero.{" "}
                </p>
              </div>
              <div className="bg-gray-50 p-4 mt-4 rounded-lg">
                <p>render tags description here...</p>
              </div>
              <div className="bg-gray-50 p-4 mt-4 rounded-lg">
                <p>render tags description here...</p>
              </div>
              <div className="bg-gray-50 p-4 mt-4 rounded-lg">
                <p>render tags description here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
