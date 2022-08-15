import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h5>
        &copy; <span>The Bookshelf Company</span>
      </h5>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
`;

export default Footer;
