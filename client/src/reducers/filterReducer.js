const filterReducer = (state, action) => {
    if (action.type === 'load books') {
        return {
            ...state,
            allBooks: [...action.payload],
            filteredBooks: [...action.payload],
        };
    }

    if (action.type === 'sort books') {
        if (action.payload === 'price-lowest') {
            const filteredBooks = state.filteredBooks.sort(
                (a, b) => a.price - b.price
            );
            return { ...state, filteredBooks };
        }
        if (action.payload === 'price-highest') {
            const filteredBooks = state.filteredBooks.sort(
                (a, b) => b.price - a.price
            );
            return { ...state, filteredBooks };
        }

        if (action.payload === 'name-asc') {
            return {
                ...state,
                filteredBooks: state.filteredBooks.sort((a, b) =>
                    a.title.localeCompare(b.title)
                ),
            };
        }
        if (action.payload === 'name-desc') {
            return {
                ...state,
                filteredBooks: state.filteredBooks.sort((a, b) =>
                    b.title.localeCompare(a.title)
                ),
            };
        }
        return state;
    }

    throw new Error(`No matching "${action.type}" action type`);
};

export default filterReducer;
