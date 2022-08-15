import PageHero from "../components/PageHero.js";
import React from "react";
import aboutImg from "../assets/book-shelf.jpg";
import styled from "styled-components";

function AboutPage() {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum
            officiis accusantium aliquid modi, exercitationem ab eligendi
            doloribus voluptatibus maiores distinctio placeat nisi deserunt
            perspiciatis nulla, incidunt labore! Modi, nulla exercitationem,
            magni consequuntur ipsum, eveniet laboriosam perferendis quo ex
            porro cumque accusantium non? Sequi excepturi ut repellat est earum
            nihil possimus quasi voluptates expedita animi perferendis
            explicabo, molestiae deleniti, harum natus eos, vitae et maxime
            sapiente impedit quisquam magnam nemo.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
