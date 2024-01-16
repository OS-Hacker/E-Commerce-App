import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="main-Footer">
        <div className="container-Fluid ">
          <div className="Footer_Text ">
            <h2>Global-Bazzar</h2>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              quisquam doloremque assumenda nisi hic totam?
            </p>
          </div>
          <div className="Lnks text-center">
            <h2 className="me-5">Usefull Links</h2>
            <p>
              <Link to="#!" className="text-reset">
                Pricing
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-reset">
                Settings
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-reset">
                Orders
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-reset">
                Help
              </Link>
            </p>
          </div>

          <div className="Products text-center">
            <h2 className="text-center">Products</h2>
            <p>
              <Link to="#!" className="text-reset">
                Angular
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-reset">
                Vue
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-reset">
                React
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-reset">
                Laravel
              </Link>
            </p>
          </div>

          <div className="flex2">
            <div className="Main_Link">
              <p>
                <Link to="#!" className="text-reset">
                  <i className="bi bi-instagram"></i>
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  <i className="bi bi-whatsapp"></i>
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  <i className="bi bi-github"></i>
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </p>

              <p>
                <Link to="#!" className="text-reset">
                  <i className="bi bi-twitter"></i>
                </Link>
              </p>
            </div>

            <div className="Icons text-center">
              <img src="./Images/Clean.png" className="Clean" alt="" />

              <img src="./Images/recycale.jpg" className="recycle" alt="" />

              <img
                src="./Images/shopping.logo.jpg"
                className="shopping"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .main-Footer {
    width: 100%;
    height: 40vh;
  }

  .text {
    font-size: 1.7rem;
    width: 320px;
  }

  .container-Fluid {
    font-size: 1.7rem;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #181d2c;
    color: #f6f8fa;
  }

  .Main_Link {
    font-size: 3rem;
    display: flex;
  }

  .bi {
    padding: 1.5rem;
    cursor: pointer;
    margin-bottom: 3rem;
    border-radius: 50%;
  }

  .bi:hover {
    box-shadow: 2px 5px 10px 5px #888888;
  }

  .Clean {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }

  .recycle {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-left: 1rem;
  }
  .shopping {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-left: 1rem;
  }

  .flex2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container-Fluid {
      flex-direction: column;
      height: 100vh;
      text-align: center;
    }

    .Clean {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
    }

    .recycle {
      width: 4rem;
      height: 4rem;
    }
    .shopping {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
`;

export default Footer;
