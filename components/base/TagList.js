import React from "react";
import TagItem from "./TagItem";

function TagList({ tagList }) {
  return (
    <>
      {tagList.map((tag) => {
        return (
          <TagItem
            id={tag.id}
            title={tag.title}
            width={tag.width}
            height={tag.height}
            xPosition={tag.xPosition}
            yPosition={tag.yPosition}
          />
        );
      })}
    </>
  );
}

export default TagList;
