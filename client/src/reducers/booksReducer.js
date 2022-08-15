const booksReducer = (state, action) => {
  if (action.type === "sidebar open") {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === "sidebar close") {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === "getBooksSuccess") {
    // three random books
    const featuredBooks = action.payload.books
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    return {
      ...state,
      books: action.payload,
      featuredBooks,
    };
  }

  if (action.type === "getBooksError") {
    return { ...state, booksError: true };
  }

  if (action.type === "getSingleBookBegin") {
    return { ...state, singleBookLoading: true, singleBookError: false };
  }

  if (action.type === "getSingleBookSuccess") {
    return {
      ...state,
      singleBookLoading: false,
      singleBook: action.payload,
    };
  }

  if (action.type === "getSingleBookError") {
    return { ...state, singleBookLoading: false, singleBookError: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default booksReducer;
