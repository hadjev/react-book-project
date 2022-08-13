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
    console.log(singleBook);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  console.log(singleBook);
  // const { title } = singleBook.volumeInfo;
  // console.log(title);

  // return (
  //   <>
  //     <h1>{singleBook.volumeInfo.title}</h1>
  //   </>
  // );

  const { volumeInfo, saleInfo, searchInfo } = singleBook;
  const {
    title,
    subtitle,
    authors,
    publisher,
    publishedDate,
    description,
    industryIdentifiers,
    pageCount,
    categories,
    imageLinks: { thumbnail },
  } = volumeInfo;

  const {
    listPrice: { amount },
  } = saleInfo;

  return (
    <Wrapper>
      <PageHero />
      <div className="section section-center page">
        <Link to="/books" className="btn">
          back to books
        </Link>
        <div className="book-center">
          <img src={thumbnail} alt={title} />
          <section className="content">
            <h2>{title}</h2>
            <p>
              by <span className="authors">{authors.join(", ")}</span>
            </p>
            <h5 className="price">${amount}</h5>
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
              <span>ISBN: {industryIdentifiers[0].identifier}</span>
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
