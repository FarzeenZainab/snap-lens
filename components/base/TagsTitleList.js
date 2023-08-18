import React from "react";
import { useGlobalTags } from "../../context/TagsContext";

function TagsTitleList() {
  const { state: titlesList, dispatch } = useGlobalTags();
  return (
    <ul className="tags-content-list">
      {titlesList.map((listItem, index) => {
        return (
          <li className="bg-gray-50 p-4 mt-4 rounded-lg" key={listItem.id}>
            {listItem.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TagsTitleList;
