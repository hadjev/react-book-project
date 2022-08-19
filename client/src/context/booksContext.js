import { Link, Navigate } from 'react-router-dom';
import React, { useContext, useEffect, useReducer } from 'react';

import axios from 'axios';
import reducer from '../reducers/booksReducer';

const AppContext = React.createContext();

const initialState = {
    isSidebarOpen: false,
    booksError: false,
    books: [],
    featuredBooks: [],
    singleBookLoading: false,
    singleBookError: false,
    singleBook: {},
    isOverlayOpen: false,
};

const baseUrl = 'http://localhost:3005/api/v1/books';

export const BookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: 'sidebar open' });
    };

    const closeSidebar = () => {
        dispatch({ type: 'sidebar close' });
    };

    const fetchBooks = async () => {
        try {
            const response = await axios.get(baseUrl);
            const data = response.data;

            dispatch({ type: 'getBooksSuccess', payload: data.books });
        } catch (error) {
            console.log(error);
            dispatch({ type: 'getBooksError' });
        }
    };

    const fetchSingleBook = async (url) => {
        dispatch({ type: 'getSingleBookBegin' });

        try {
            const response = await axios.get(url);
            const singleBook = await response.data.book[0];
            dispatch({ type: 'getSingleBookSuccess', payload: singleBook });
        } catch (error) {
            dispatch({ type: 'getSingleBookError' });
        }
    };

    const openOverlay = () => {
        dispatch({ type: 'overlay open' });
    };

    const closeOverlay = () => {
        dispatch({ type: 'overlay close' });
    };

    const editSingleBook = async (e, isbn) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Transform data to proper format
        const book = Object.fromEntries(formData);
        book.authors = book.authors.split(', ');
        book.pageCount = Number(book.pageCount);
        book.price = Number(book.price);
        book.reviews = Number(book.reviews);
        book.stars = Number(book.stars);

        try {
            // await axios.put(`${baseUrl}/${isbn}`, book);
            dispatch({ type: 'editSingleBook', payload: { isbn, book } });
            console.log('form submit');
        } catch (error) {
            console.log(error);
        }
    };

    const deleteSingleBook = async (isbn) => {
        try {
            await axios.delete(`${baseUrl}/${isbn}`);
            dispatch({ type: 'deleteSingleBook', payload: isbn });
            console.log('book deleted');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <AppContext.Provider
            value={{
                ...state,
                openSidebar,
                closeSidebar,
                fetchSingleBook,
                editSingleBook,
                deleteSingleBook,
                openOverlay,
                closeOverlay,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useBooksContext = () => {
    return useContext(AppContext);
};
