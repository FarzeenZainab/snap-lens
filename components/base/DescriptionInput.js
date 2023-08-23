import React, { useState } from "react";
import styles from "../styles/description-input.module.css";
import { useIsEditing } from "../../context/IsEditing";
import { useGlobalTags } from "../../context/TagsContext";

function DescriptionInput() {
  const { state, dispatch } = useIsEditing();
  const { dispatch: setTagsDescription } = useGlobalTags();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.isEditing && state.id) {
      setTagsDescription({
        type: "EDIT_TITLE",
        payload: description,
        tagId: state.id,
      });
    } else {
      setTagsDescription({ type: "ADD_TITLE", payload: description });
    }

    dispatch({ type: false });
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  return state ? (
    <div className={styles.formContainer}>
      <div className={`${styles.header}`}>
        <h2 className="font-medium text-lg">Tag's Description</h2>
        <div className={`btn-icon`}>
          <i className="icon icon-close text-gray-400"></i>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter tag's description here..."
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

export default DescriptionInput;
