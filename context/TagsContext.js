import { useContext, createContext, useReducer } from "react";
import { useIsEditing } from "./IsEditing";

// tags initial state
const initialTagsState = [];

// create context
const TagsContext = createContext();

// reducer function that will handle state updates
const tagsReducer = (state, action) => {
  switch (action.type) {
    // add tag
    case "ADD_NEW_TAG":
      const { dispatch: setEditingMode } = useIsEditing();
      state.push(action.payload);
      setEditingMode({ type: true });
      console.log(state);

    // other cases
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
