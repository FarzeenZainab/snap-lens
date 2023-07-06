import React from "react";
import styles from "./../styles/tagItem.module.css";

function TagItem({ id, xPosition, yPosition, width, height, title }) {
  return (
    <div className={styles.tag} id={id}>
      <p className={styles.title}>{title ? title : "Tag title goes here"}</p>
    </div>
  );
}

export default TagItem;
