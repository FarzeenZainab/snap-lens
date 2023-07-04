import React from "react";
import TagItem from "./TagItem";

function TagList({ tagList }) {
  return (
    <>
      {tagList.map((tag) => {
        return <TagItem id={tag.id} />;
      })}
    </>
  );
}

export default TagList;
