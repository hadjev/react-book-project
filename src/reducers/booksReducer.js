const booksReducer = (state, action) => {
  if (action.type === "sidebar open") {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === "sidebar close") {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === "getBooksSuccess") {
    // three random books
    const featuredBooks = action.payload
      .filter((book) => book.saleInfo.saleability === "FOR_SALE")
      .filter((book) => book.volumeInfo.industryIdentifiers)
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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default booksReducer;
