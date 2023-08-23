import React, { useState } from "react";
import styles from "../styles/description-input.module.css";
import { useIsEditing } from "../../context/IsEditing";
import { useGlobalTags } from "../../context/TagsContext";

function DescriptionInput() {
  const { state, dispatch } = useIsEditing();
  const { state: tags, dispatch: setTag } = useGlobalTags();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.isEditing && state.id) {
      setTag({
        type: "EDIT_DESCRIPTION",
        payload: description,
        tagId: state.id,
      });
    } else {
      setTag({ type: "ADD_DESCRIPTION", payload: description });
    }

    setDescription("");
    dispatch({ type: false });
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCancel = () => {
    // setTag({ type: "DELETE_TAG", payload: tags[0].id });
    dispatch({ type: false });
  };

  return state ? (
    <div className={styles.formContainer}>
      <div className={`${styles.header}`}>
        <h2 className="font-medium text-lg">Tag's Description</h2>
        <div className={`btn-icon`} onClick={handleCancel}>
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
