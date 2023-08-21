import React, { useState } from "react";
import styles from "../styles/title-input.module.css";
import { useIsEditing } from "../../context/IsEditing";
import { useGlobalTags } from "../../context/TagsContext";

function TitleInput() {
  const { state, dispatch } = useIsEditing();
  const { dispatch: setTagsTitle } = useGlobalTags();
  const [title, setTitle] = useState();

  // console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.isEditing && state.id) {
      setTagsTitle({ type: "EDIT_TITLE", payload: title, tagId: state.id });
    } else {
      setTagsTitle({ type: "ADD_TITLE", payload: title });
    }
    dispatch({ type: false });
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
