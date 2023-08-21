import React from "react";
import { useGlobalTags } from "../../context/TagsContext";
import { useIsEditing } from "../../context/IsEditing";

function TagsTitleList() {
  const { state: titlesList, dispatch } = useGlobalTags();
  const { dispatch: setIsEditing } = useIsEditing();

  const handleTagDeletion = (id) => {
    dispatch({ type: "DELETE_TAG", payload: id });
  };

  const handleTagEdit = (id) => {
    setIsEditing({ type: true, payload: id, editTagTitle: true });
    dispatch({ type: "EDIT_TAG", payload: id });
  };

  return (
    <>
      {/* <h1 className="text-2xl uppercase font-700">Tags:</h1> */}
      {titlesList.length >= 1 && (
        <ul className="tags-content-list">
          {titlesList.map((listItem) => {
            return (
              <li
                className="bg-gray-50 p-2.5 mt-4 rounded-md border border-gray-200 flex items-center justify-between"
                key={listItem.id}
                id={listItem.id}
              >
                <span className="w-[90%]">{listItem.title}</span>

                <div
                  className="btn-icon mr-2.5"
                  onClick={handleTagEdit.bind(null, listItem.id)}
                >
                  <i className="icon icon-edit"></i>
                </div>
                <div
                  className="btn-icon"
                  onClick={handleTagDeletion.bind(null, listItem.id)}
                >
                  <i className="icon icon-remove"></i>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {titlesList.length === 0 && (
        <div className="flex items-center flex-col p-2">
          <div className="w-[100px] mb-2">
            <img
              src="/images/draw.png"
              alt="no tags available to list"
              className="w-full"
            />
          </div>
          <h2 className="text-center text-gray-700 text-xl leading-[18px]">
            To get started, just click and drag your mouse over the parts you
            want to highlight on the image.
          </h2>
        </div>
      )}
    </>
  );
}

export default TagsTitleList;
