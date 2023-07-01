import React from "react";
import styles from "../styles/button.module.css";

function Button({ label, className, onClick, iconClass }) {
  return (
    <>
      <button className={`${className || ""} ${styles.btn}`} onClick={onClick}>
        {iconClass && <i className={`${styles.icon} ${iconClass}`} />}
        <span className="label">{label}</span>
      </button>
    </>
  );
}

export default Button;
