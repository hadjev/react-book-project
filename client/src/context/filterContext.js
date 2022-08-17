import React, { useContext, useEffect, useReducer } from 'react';

import reducer from '../reducers/filterReducer';
import { useBooksContext } from './booksContext';

const initialState = {
    filteredBooks: [],
    allBooks: [],
    sort: '',
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const { books } = useBooksContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'load books', payload: books });
    }, [books]);

    const sortBooks = (e) => {
        // const name = e.target.name;
        const value = e.target.value;

        dispatch({ type: 'sort books', payload: value });
    };

    return (
        <FilterContext.Provider value={{ ...state, sortBooks }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
