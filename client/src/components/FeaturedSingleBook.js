import React from 'react';
import Stars from './Stars.js';
import { useNavigate } from 'react-router-dom';

const FeaturedSingleBook = ({
    imageUrl,
    authors,
    title,
    isbn,
    price,
    stars,
    reviews,
}) => {
    // const image
    // const authors
    // const title
    // const isbn
    // const price
    // const currency

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/books/${isbn}`)}>
            <div className="img">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <div className="authorsContainer">
                    <p>
                        by
                        <span className="authors"> {authors.join(', ')}</span>
                    </p>
                </div>
                <Stars stars={stars} reviews={reviews} />
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default FeaturedSingleBook;
