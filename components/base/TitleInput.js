import React from "react";
import styles from "../styles/title-input.module.css";
import { useIsEditing } from "../../context/IsEditing";

function TitleInput() {
  const { state, dispatch } = useIsEditing();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: false });
  };

  return state ? (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter tag description here..."
        />
        <button className={styles.button} type="submit">
          Save
        </button>
      </form>
    </div>
  ) : (
    <></>
  );
}

export default TitleInput;
