import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";

const HeroSection = ({ data }) => {
  const { Title, Sub_Title } = data;

  return (
    <Wrapper>
      <div
        className="container m-auto "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="Text ">
          <div className="Tital">
            <h1>{Title}</h1>
            <h2>{Sub_Title}</h2>
          </div>
          <p className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium, animi quam, adipisci mollitia inventor non eius <br />
            Lorem ipsum dolor sit.
          </p>
          <Button>Shopping</Button>
        </div>
        <div className="img">
          <img src="./Images/Heor-3.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .para {
    font-size: 1.5rem;
  }

  .Text {
    width: 45rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      text-align: center;
      flex-direction: column;
    }
    .para {
      padding: 0rem 7rem;
    }
  }
`;

export default HeroSection;
