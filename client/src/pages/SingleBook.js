import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";

import Error from "../components/Error.js";
import Loading from "../components/Loading.js";
import PageHero from "../components/PageHero.js";
import styled from "styled-components";
import { singleBookISBNUrl as url } from "../utils/singleBookUrl";
import { useBooksContext } from "../context/context.js";

function SingleBook() {
  const { isbn } = useParams();
  const {
    singleBookLoading: loading,
    singleBookError: error,
    singleBook,
    fetchSingleBook,
  } = useBooksContext();

  useEffect(() => {
    fetchSingleBook(`${url}${isbn}`);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    title,
    authors,
    publisher,
    publishedDate,
    description,
    pageCount,
    imageUrl,
    price,
  } = singleBook;

  return (
    <Wrapper>
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
              {/* by <span className="authors">{authors.join(", ")}</span> */}
            </p>
            <h5 className="price">${price}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span>Publisher: {publisher}</span>
            </p>
            <p className="info">
              <span>Published Date: {publishedDate}</span>
            </p>
            <p className="info">
              <span>Pages: {pageCount}</span>
            </p>
            <p className="info">
              <span>ISBN: {isbn}</span>
            </p>
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
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
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
    width: 500px;
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
