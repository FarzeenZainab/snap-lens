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

    // Create a new tag object with the updated title
    const updatedTag = {
      ...tags[tags.length - 1], // Copy the last tag
      title: title, // Update the title
    };

    // Update the tags array with the updated tag
    const updatedTags = [...tags];
    updatedTags[tags.length - 1] = updatedTag;

    // Update the tags context with the new array
    setTags(updatedTags);

    // Dispatch the action to update the isEditing state
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
