import React, { useState } from "react";
import styles from "../styles/title-input.module.css";
import { useIsEditing } from "../../context/IsEditing";
import { useGlobalTags } from "../../context/TagsContext";

function TitleInput() {
  const { state, dispatch } = useIsEditing();
  const { state: tags, dispatch: setTags } = useGlobalTags();
  const [title, setTitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags({ type: "UPDATE_TITLE", payload: title });
    dispatch({ type: false });
    console.log(tags);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return state ? (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter tag description here..."
          onChange={handleInputChange}
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
