import React from "react";
import styles from "./../styles/tagItem.module.css";

function TagItem({ id, xPosition, yPosition, width, height, description }) {
  return (
    <div
      className={styles.tag}
      id={id}
      style={{
        position: "absolute",
        top: yPosition,
        left: xPosition,
        width: width,
        height: height,
      }}
    ></div>
  );
}

export default TagItem;
