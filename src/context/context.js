import React, { useContext, useEffect, useReducer } from "react";

import axios from "axios";
import booksData from "../assets/all-books.json";
import reducer from "../reducers/booksReducer";

const AppContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  booksError: false,
  books: [],
  featuredBooks: [],
  singleBookLoading: false,
  singleBookError: false,
  singleBook: {},
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

  const fetchSingleBook = async (url) => {
    dispatch({ type: "getSingleBookBegin" });

    try {
      const response = await axios.get(url);

      const singleBook = await response.data.items[0];
      dispatch({ type: "getSingleBookSuccess", payload: singleBook });
    } catch (error) {
      dispatch({ type: "getSingleBookError" });
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleBook }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(AppContext);
};
