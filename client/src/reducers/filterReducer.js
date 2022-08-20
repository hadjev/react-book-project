const filterReducer = (state, action) => {
    if (action.type === 'load books') {
        const maxPrice = Math.max(...action.payload.map((book) => book.price));

        return {
            ...state,
            allBooks: [...action.payload],
            filteredBooks: [...action.payload],
            filters: {
                ...state.filters,
                maxPrice,
                price: maxPrice,
            },
        };
    }

    if (action.type === 'update sort') {
        return { ...state, sort: action.payload };
    }

    if (action.type === 'sort books') {
        const { sort, filteredBooks } = state;

        let tempBooks = filteredBooks;

        if (sort === 'price-lowest') {
            tempBooks.sort((a, b) => a.price - b.price);
        }
        if (sort === 'price-highest') {
            tempBooks.sort((a, b) => b.price - a.price);
        }
        if (sort === 'name-asc') {
            tempBooks.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sort === 'name-desc') {
            tempBooks.sort((a, b) => b.title.localeCompare(a.title));
        }

        return { ...state, filteredBooks: tempBooks };
    }

    if (action.type === 'updateFilters') {
        const { name, value } = action.payload;

        return { ...state, filters: { ...state.filters, [name]: value } };
    }

    if (action.type === 'filter books') {
        console.log('asdf');
        return { ...state };
    }

    throw new Error(`No matching "${action.type}" action type`);
};

export default filterReducer;
