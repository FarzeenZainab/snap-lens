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
    case "DELETE_TAG": {
      const updateState = state.filter((tag) => tag.id !== action.payload);
      return updateState;
    }

    // add description
    case "ADD_DESCRIPTION": {
      const updatedState = [...state];
      updatedState[0] = {
        ...updatedState[0],
        description: action.payload,
      };
      return updatedState;
    }

    // edit tag description
    case "EDIT_DESCRIPTION": {
      const updatedState = [...state];
      const itemIndex = updatedState.findIndex(
        (tag) => tag.id === action.tagId
      );

      updatedState[itemIndex] = {
        ...updatedState[itemIndex],
        description: action.payload,
      };
      return updatedState;
    }

    // Zoom in
    case "ZOOM_IN": {
      const updatedState = state.map((tag) => {
        return {
          ...tag,
          x: tag.x * action.scaleFactor,
          y: tag.y * action.scaleFactor,
          width: tag.width * action.scaleFactor,
          height: tag.height * action.scaleFactor,
        };
      });

      return updatedState;
    }

    // Zoom out
    case "ZOOM_OUT": {
      const updatedState = state.map((tag) => {
        return {
          ...tag,
          x: tag.x / action.scaleFactor,
          y: tag.y / action.scaleFactor,
          width: tag.width / action.scaleFactor,
          height: tag.height / action.scaleFactor,
        };
      });

      return updatedState;
    }

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
