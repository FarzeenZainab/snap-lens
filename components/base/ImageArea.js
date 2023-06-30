import React from "react";
import styles from "../styles/image-area.module.css";

function ImageArea() {
  return (
    <div className={`${styles["image-area-container"]}`}>
      <img
        src="/images/floor-plan.png"
        alt="uploaded image will be shown here"
      />
    </div>
  );
}

export default ImageArea;
