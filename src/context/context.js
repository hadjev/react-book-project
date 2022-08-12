import React, { useContext, useEffect, useReducer } from "react";

import booksData from "../assets/all-books.json";
import reducer from "../reducers/booksReducer";

const AppContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  booksError: false,
  books: [],
  featuredBooks: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    console.log("open");
    dispatch({ type: "sidebar open" });
  };

  const closeSidebar = () => {
    dispatch({ type: "sidebar close" });
  };

  const fetchBooks = async () => {
    try {
      const books = await booksData;

      dispatch({ type: "getBooksSuccess", payload: books });
    } catch (error) {
      console.log(error);
      dispatch({ type: "getBooksError" });
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(AppContext);
};
