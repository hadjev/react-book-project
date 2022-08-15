import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ accessInfo, saleInfo, searchInfo, volumeInfo }) => {
  const image = volumeInfo.imageLinks.thumbnail || "";
  const authors = volumeInfo.authors;
  const title = volumeInfo.title || "";
  const isbn = volumeInfo.industryIdentifiers[0]?.identifier;
  const price = saleInfo.retailPrice.amount;
  const currency = saleInfo.retailPrice.currencyCode;

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/books/${isbn}`)}>
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="authorsContainer">
          <p>
            by
            <span className="authors"> {authors.join(", ")}</span>
          </p>
        </div>
        <p>
          Price: {price} {currency}
        </p>
      </div>
    </div>
  );
};

export default Book;
