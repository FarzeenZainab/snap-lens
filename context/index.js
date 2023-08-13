import { useContext, createContext, useReducer } from "react";

// tags initial state
const initialTagsState = [
  { id: 1, x: 167, y: 203.79999542236328, width: 184, height: 164 },
  { id: 2, x: 272, y: 80.79999542236328, width: 122, height: 78 },
  { id: 3, x: 442, y: 203.79999542236328, width: 81, height: 113 },
];

// create context
const TagsContext = createContext();

// reducer function that will handle state updates
const tagsReducer = (state, action) => {
  switch (action.type) {
    // add tag
    case "ADD_NEW_TAG":
      state.push(action.payload);

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
