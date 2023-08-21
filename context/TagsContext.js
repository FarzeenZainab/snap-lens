import { useContext, createContext, useReducer } from "react";

// tags initial state
const initialTagsState = [];

// create context
const TagsContext = createContext();

// reducer function that will handle state updates
const tagsReducer = (state, action) => {
  switch (action.type) {
    // add tag
    case "ADD_NEW_TAG":
      state.unshift(action.payload);
      return state;

    // delete tag
    case "DELETE_TAG":
      const updateState = state.filter((tag) => tag.id !== action.payload);
      return updateState;

    // add title
    case "ADD_TITLE":
      const updatedState = [...state];
      updatedState[0] = {
        ...updatedState[0],
        title: action.payload,
      };
      return updatedState;

    // edit tag title
    case "EDIT_TITLE":
      const tag = state.filter((tag) => {
        return tag.id === action.tagId;
      });

      console.log(tag);

    // console.log(action.payload);
    // console.log(action.tagId);

    default:
      return state;
  }
};

// provider component
const TagsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tagsReducer, initialTagsState);
  return (
    <TagsContext.Provider value={{ state, dispatch }}>
      {children}
    </TagsContext.Provider>
  );
};

// custom hook to use the global state
const useGlobalTags = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("tags context not found");
  }
  return context;
};

export { TagsProvider, useGlobalTags };
