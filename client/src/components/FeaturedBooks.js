import Error from "./Error";
import FeaturedSingleBook from "./FeaturedSingleBook";
import React from "react";
import styled from "styled-components";
import { useBooksContext } from "../context/context";

const FeaturedBooks = () => {
  const { booksError: error, featuredBooks } = useBooksContext();

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured books</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        {featuredBooks.map((book) => {
          return <FeaturedSingleBook key={book.id} {...book} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3em 0 0 0;
    text-align: left;
  }
  
  .card {
    width: 30%;
    display: flex;
    background: #eee;
    padding: 0.6em 1em 0.6em 0.6em;
    margin-bottom: 1em;
    border-radius: 0.3em;
    box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 10px;
    border: solid 1px #ccc;
  }
  
    .card:hover {
      cursor: pointer
    }
  
  .img {
    margin: 0 0.6em 0 0;
  }

  .authorsContainer {
    margin-bottom: 10px;
  }

  .authors.authors {
    color: grey;
    font-weight: bold;
    font-style: italic;
  }

  .card h3 {
    margin: 0;
    font-size: 1em;
  }

  .content p {
    margin: 0;
    font-size: 0.7em;
    color: #222;
  }

  @media (max-width: 820px) {
  .container {
    min-width: auto;
    display: block;
  }
  .card {
    width: 100%;
  }
`;

export default FeaturedBooks;
