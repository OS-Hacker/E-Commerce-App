import React from "react";
import styled from "styled-components";

const Service_Section = () => {
  return (
    <Wrapper>
      <div className="container text-center mb-5">
        <div className="col_1">
          <div className="circal">
            <i class="bi bi-shield-fill-check"></i>
          </div>
          <p className="mt-2" style={{ fontSize: "15px", color: "GrayText" }}>
            Secure Product Delivery{" "}
          </p>
        </div>

        <div className="d-flex" style={{ flexDirection: "column" }}>
          <div className="col_1">
            <div className="circal">
              <i class="bi bi-truck"></i>
            </div>
            <p className="mt-2" style={{ fontSize: "15px", color: "GrayText" }}>
              Super Fast Delivery
            </p>
          </div>

          <div className="col_1">
            <div className="circal">
              <i class="bi bi-shield-shaded"></i>
            </div>
            <p className="mt-2" style={{ fontSize: "15px", color: "GrayText" }}>
              Secure Payment Method
            </p>
          </div>
        </div>

        <div className="col_1">
          <div className="circal">
            <i class="bi bi-cash-coin"></i>
          </div>
          <p className="mt-2" style={{ fontSize: "15px", color: "GrayText" }}>
            Money Back Guarantee
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    width: 100%;
    height: 100%;
    padding-top: 8rem;
    margin-bottom: 8rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .col_1 {
    width: 35rem;
    height: 22rem;
    box-shadow: 1.2rem 1rem 0.8rem 1rem #888888;
    z-index: 9999;
    background-color: #f3e6ff;
    border-radius: 1rem;
    margin: 1rem;
    transition: all 0.8s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .circal {
    width: 9rem;
    height: 9rem;
    border: 0.1rem solid #7638d3;
    border-radius: 50%;
    background-color: white;
  }

  .col_1:hover {
    transform: scale(1.1);
    transition: all 0.8s ease;
  }

  .bi-shield-fill-check,
  .bi-truck,
  .bi-shield-shaded,
  .bi-cash-coin {
    font-size: 5rem;
    color: #7638d3;
  }

  .circal {
    padding: 1.2rem 0rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      flex-wrap: wrap;
    }
  }
`;
export default Service_Section;
