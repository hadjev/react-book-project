import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

function Error() {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <h2>there was an error...</h2>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .btn {
    margin-top: 20px;
  }
`;

export default Error;
