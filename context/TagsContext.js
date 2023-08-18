import { useContext, createContext, useReducer } from "react";

// tags initial state
const initialTagsState = [
  {
    height: 187,
    id: 1,
    width: 126,
    x: 184,
    y: 50.79999542236328,
    title: "test",
  },
];

// create context
const TagsContext = createContext();

// reducer function that will handle state updates
const tagsReducer = (state, action) => {
  switch (action.type) {
    // add tag
    case "ADD_NEW_TAG":
      state.push(action.payload);
      return state;

    // Update Title
    case "UPDATE_TITLE":
      const updatedState = [...state];
      updatedState[updatedState.length - 1] = {
        ...updatedState[updatedState.length - 1],
        title: action.payload,
      };
      return updatedState;

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
