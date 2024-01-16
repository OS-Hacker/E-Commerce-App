import React from "react";
import styled from "styled-components";

const Error_Page = () => {
  const Error_Img = {
    backgroundImage: "url(./Images/Error_Img.avif)",
    width: "100%",
    height: "69vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  
  return (
    <Wrapper>
      <div className="Error">
        <div className="" style={Error_Img}></div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .Error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60rem;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .Error {
      position: relative;
      right: 10rem;
    }
  }
`;

export default Error_Page;
