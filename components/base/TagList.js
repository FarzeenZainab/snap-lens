import React from "react";
import TagItem from "./TagItem";

function TagList({ tagList }) {
  return (
    <>
      {tagList.map((tag) => {
        return (
          <TagItem
            key={tag.id}
            id={tag.id}
            width={tag.width}
            height={tag.height}
            xPosition={tag.x}
            yPosition={tag.y}
          />
        );
      })}
    </>
  );
}

export default TagList;
