const booksReducer = (state, action) => {
    if (action.type === 'sidebar open') {
        return { ...state, isSidebarOpen: true };
    }

    if (action.type === 'sidebar close') {
        return { ...state, isSidebarOpen: false };
    }

    if (action.type === 'getBooksSuccess') {
        // three random books
        const featuredBooks = action.payload
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        return {
            ...state,
            books: action.payload,
            featuredBooks,
        };
    }

    if (action.type === 'getBooksError') {
        return { ...state, booksError: true };
    }

    if (action.type === 'getSingleBookBegin') {
        return { ...state, singleBookLoading: true, singleBookError: false };
    }

    if (action.type === 'getSingleBookSuccess') {
        return {
            ...state,
            singleBookLoading: false,
            singleBook: action.payload,
        };
    }

    if (action.type === 'getSingleBookError') {
        return { ...state, singleBookLoading: false, singleBookError: true };
    }

    if (action.type === 'overlay open') {
        window.scrollTo(0, 0);
        return { ...state, isOverlayOpen: true };
    }

    if (action.type === 'overlay close') {
        window.scrollTo(0, 0);
        return { ...state, isOverlayOpen: false };
    }

    // maybe together
    if (action.type === 'createSingleBook') {
        return { ...state, singleBook: action.payload.book };
    }

    if (action.type === 'editSingleBook') {
        return { ...state, singleBook: action.payload.book };
    }

    if (action.type === 'deleteSingleBook') {
        state.books = state.books.filter(
            (book) => book.isbn !== action.payload
        );
        return { ...state };
    }

    throw new Error(`No Matching "${action.type}" - action type`);
};

export default booksReducer;
