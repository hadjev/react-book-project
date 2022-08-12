// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import React from "react";
// import styled from "styled-components";

// const Book = ({ accessInfo, saleInfo, searchInfo, volumeInfo }) => {
//   const image = volumeInfo.imageLinks.thumbnail || "";
//   const title = volumeInfo.title || "";
//   const isbn = volumeInfo.industryIdentifiers[0].identifier || "";
//   const price = 1.99;

//   // console.log("image", image);
//   // console.log("title", title);
//   // console.log("isbn", isbn);

//   return (
//     <Wrapper>
//       <div className="container">
//         <img src={image} alt={title} />
//         <Link to={`/products/${isbn}`} className="link">
//           <FaSearch />
//         </Link>
//       </div>
//       <footer>
//         <h5>{title}</h5>
//         <p>{price}</p>
//       </footer>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.article`
//   .container {
//     position: relative;
//     background: var(--clr-black);
//     border-radius: var(--radius);
//   }
//   img {
//     width: 100%;
//     display: block;
//     object-fit: cover;
//     border-radius: var(--radius);
//     transition: var(--transition);
//   }
//   .link {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background: var(--clr-primary-5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 50%;
//     transition: var(--transition);
//     opacity: 0;
//     cursor: pointer;
//     svg {
//       font-size: 1.25rem;
//       color: var(--clr-white);
//     }
//   }
//   .container:hover img {
//     opacity: 0.5;
//   }
//   .container:hover .link {
//     opacity: 1;
//   }
//   footer {
//     margin-top: 1rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   footer h5,
//   footer p {
//     margin-bottom: 0;
//     font-weight: 400;
//   }

//   footer p {
//     color: var(--clr-primary-5);
//     letter-spacing: var(--spacing);
//   }
// `;
// export default Book;

import { FaSearch } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Book = ({ accessInfo, saleInfo, searchInfo, volumeInfo }) => {
  const image = volumeInfo.imageLinks.thumbnail || "";
  const authors = volumeInfo.authors;
  const title = volumeInfo.title || "";
  const subtitle = volumeInfo.subtitle || "";
  const description = volumeInfo.description || "";
  const isbn = volumeInfo.industryIdentifiers[0]?.identifier;
  const price = saleInfo.retailPrice.amount;
  const currency = saleInfo.retailPrice.currencyCode;

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/products/${isbn}`)}>
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

const Wrapper = styled.article``;
export default Book;
