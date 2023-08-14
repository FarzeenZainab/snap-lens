import { useContext, createContext, useReducer } from "react";

// initial state
const initialState = false;

// create context
const isEditing = createContext();

// reducer function to update the state
const isEditingReducer = (state, action) => {
  switch (action.type) {
    case true: {
      return (state = true);
    }
    case false: {
      return (state = false);
    }
    default:
      return state;
  }
};

// provider component
const IsEditingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(isEditingReducer, initialState);
  return (
    <isEditing.Provider value={{ state, dispatch }}>
      {children}
    </isEditing.Provider>
  );
};

// custom hook
const useIsEditing = () => {
  const context = useContext(isEditing);
  if (!context) {
    throw new Error("isEditing context not found");
  }
  return context;
};

export { IsEditingProvider, useIsEditing };
