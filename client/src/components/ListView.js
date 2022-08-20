import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const ListView = ({ books }) => {
    return (
        <Wrapper>
            {books.map((book) => {
                const { isbn, imageUrl, title, authors, price, description } =
                    book;

                return (
                    <article key={isbn}>
                        <img src={imageUrl} alt={title} />
                        <div className="info">
                            <h4>{title}</h4>
                            <p>
                                by{' '}
                                <span className="authors">
                                    {authors.join(', ')}
                                </span>
                            </p>
                            <h5 className="price">${price}</h5>
                            <p>{description?.substring(0, 150)}...</p>
                            <Link
                                to={`/books/${isbn}`}
                                className="btn"
                                onClick={() => console.log(isbn)}
                            >
                                details
                            </Link>
                        </div>
                    </article>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: grid;
    row-gap: 3rem;

    img {
        width: 150px;
    }

    h4 {
        margin-bottom: 0;
    }
    .price {
        color: var(--clr-primary-6);
        margin-bottom: 0.75rem;
    }
    p {
        max-width: 45em;
        margin-bottom: 1rem;
    }

    .imageContainer,
    .info {
        align-self: start;
    }

    .btn {
        font-size: 0.5rem;
        padding: 0.25rem 0.5rem;
    }

    .authors {
        color: grey;
        font-weight: bold;
        font-style: italic;
    }
    @media (min-width: 992px) {
        article {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 2rem;
            align-items: center;
        }
    }
`;

export default ListView;
