import React, { useContext, useEffect, useReducer } from 'react';

import reducer from '../reducers/filterReducer';
import { useBooksContext } from './booksContext';

const initialState = {
    filteredBooks: [],
    allBooks: [],
    sort: '',
    filters: {
        text: '',
        minPrice: 0,
        maxPrice: 0,
        price: 0,
    },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const { books } = useBooksContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'load books', payload: books });
    }, [books]);

    useEffect(() => {
        dispatch({ type: 'filter books' });
        dispatch({ type: 'sort books' });
    }, [books, state.sort, state.filters]);

    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({ type: 'update sort', payload: value });
    };

    const updateFilters = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === 'price') {
            value = Number(value);
        }

        dispatch({ type: 'updateFilters', payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: 'clear filters' });
    };

    return (
        <FilterContext.Provider
            value={{ ...state, updateFilters, clearFilters, updateSort }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
