import React, { useContext, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "sidebar open") {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === "sidebar close") {
    return { ...state, isSidebarOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

const SidebarContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    console.log("open");
    dispatch({ type: "sidebar open" });
  };

  const closeSidebar = () => {
    dispatch({ type: "sidebar close" });
  };

  return (
    <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
