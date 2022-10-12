import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import EditSingleBook from '../components/crud/EditSingleBook';
import Error from '../components/Error.js';
import Loading from '../components/Loading.js';
import PageHero from '../components/PageHero.js';
import Stars from '../components/Stars.js';
import axios from 'axios';
import styled from 'styled-components';
import { singleBookISBNUrl as url } from '../utils/singleBookUrl';
import { useBooksContext } from '../context/booksContext.js';

function SingleBook() {
    const [currentBook, setCurrentBook] = useState({});

    const {
        singleBookLoading: loading,
        singleBookError: error,
        singleBook,
        fetchSingleBook,
        isOverlayOpen,
        openOverlay,
        closeOverlay,
        editSingleBook,
        deleteSingleBook,
    } = useBooksContext();

    const navigate = useNavigate();
    const { isbn } = useParams();

    const {
        title,
        authors = [],
        publisher,
        publishedDate,
        description,
        pageCount,
        imageUrl,
        price,
        stars,
        reviews,
    } = currentBook;

    useEffect(() => {
        const fetching = async () => {
            const response = await axios(`${url}${isbn}`);
            const book = await response.data;
            setCurrentBook(book);
        };
        fetching();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <Wrapper>
            {isOverlayOpen && (
                <EditSingleBook
                    book={currentBook}
                    onClose={closeOverlay}
                    onBookCreate={editSingleBook}
                />
            )}
            <PageHero />
            <div className="section section-center page">
                <Link to="/books" className="btn">
                    back to books
                </Link>
                <div className="book-center">
                    <img src={imageUrl} alt={title} />
                    <section className="content">
                        <h2>{title}</h2>
                        <p>
                            by{' '}
                            <span className="authors">
                                {authors.join(', ')}
                            </span>
                        </p>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className="price">${price}</h5>
                        <p className="description">{description}</p>
                        <p className="info">
                            <span>Publisher: </span>
                            {publisher}
                        </p>
                        <p className="info">
                            <span>Published Date: </span>
                            {publishedDate}
                        </p>
                        <p className="info">
                            <span>Pages: </span>
                            {pageCount}
                        </p>
                        <p className="info">
                            <span>ISBN: </span>
                            {isbn}
                        </p>
                        <div className="buttons">
                            <button
                                className="btn btn-edit"
                                onClick={openOverlay}
                            >
                                edit book
                            </button>

                            <button
                                className="btn btn-delete"
                                onClick={() => {
                                    deleteSingleBook(isbn);
                                    navigate(-1);
                                }}
                            >
                                delete book
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    .book-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }

    .price {
        color: var(--clr-primary-5);
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 400px;
        margin: 0;
        display: grid;
        grid-template-columns: 175px 1fr;
        span {
            font-weight: 700;
        }
    }

    .authors {
        font-weight: bold;
        font-style: italic;
        color: grey;
    }

    img {
        width: 400px;
        align-self: start;
        /* justify-self: center; */
    }

    .content {
        display: grid;
    }

    .buttons {
        justify-self: end;
        margin-top: 2rem;
    }

    .btn-delete {
        margin-left: 1rem;
    }

    @media (min-width: 992px) {
        .book-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .price {
            font-size: 1.25rem;
        }
    }
`;

export default SingleBook;
