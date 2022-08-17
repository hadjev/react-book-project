// import { Filters, PageHero, ProductList, Sort } from '../components';

import BookList from '../components/BookList.js';
import Filters from '../components/Filters.js';
import PageHero from '../components/PageHero.js';
import React from 'react';
import Sort from '../components/Sort.js';
import styled from 'styled-components';

const BooksPage = () => {
    return (
        <main>
            <PageHero title="books" />
            <Wrapper className="page">
                <div className="section-center books">
                    <Filters />
                    <div>
                        <Sort />
                        <BookList />
                    </div>
                </div>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.div`
    .books {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 768px) {
        .books {
            grid-template-columns: 200px 1fr;
        }
    }
`;

export default BooksPage;
