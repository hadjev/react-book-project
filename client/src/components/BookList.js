import ListView from './ListView';
import React from 'react';
import { useFilterContext } from '../context/filterContext';

const BookList = () => {
    const { filteredBooks: books } = useFilterContext();

    if (books.length === 0) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Sorry, no products matched your search
            </h5>
        );
    }

    return <ListView books={books} />;
};

export default BookList;
