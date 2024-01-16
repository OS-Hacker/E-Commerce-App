import React, { useState } from "react";
import { FilterHook } from "../context/SearchContext";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../ReduxStore.jsx/CartSlice";
import INR from "../helper/INR";
import { Button } from "antd";

const SearchProduct = () => {
  const Dispech = useDispatch();

  const addCartHandler = (e, products) => {
    e.preventDefault();

    Dispech(addToCart(products));

    gocart("/Cart");
  };

  const [value, setValue] = FilterHook();
  console.log(value.resalt);

  const goBack = useNavigate()

  return (
    <Wrapper>
      <div className="back_logo">
        <i
          className="bi bi-arrow-left-circle-fill"
          id="goback"
          onClick={() => goBack(-1)}
        ></i>
      </div>
      {value.resalt.length < 1 ? (
        <h1
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Product Not Found
        </h1>
      ) : (
        <>
          <div
            className="col-md-9 text-center alert alert-light mt-5"
            style={{ height: "100%", width: "100%" }}
          >
            <div
              className="grid d-flex"
              style={{
                justifyContent: "space-evenly",
                height: "80vh",
                alignItems: "center",
              }}
            >
              {value.resalt.map((products) => {
                const {
                  _id,
                  title,
                  slug,
                  description,
                  image,
                  price,
                  quantity,
                } = products;
                return (
                  <NavLink to={`/SingleProduct/${slug}`}>
                    <div className="Product_card m-auto">
                      <div className="Product_Img">
                        <img src={image} alt="" />
                      </div>
                      <div className="Product_name">
                        <h1 className="name" style={{ fontSize: "23px" }}>
                          {title}
                        </h1>
                      </div>
                      <div className="Product_Price">
                        <h3>
                          <INR price={price} />
                        </h3>
                      </div>
                      <div className="Product_btn">
                        <Button onClick={(e) => addCartHandler(e, products)}>
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .Product_card {
    width: 22rem;
    box-shadow: 10px 10px 8px 10px #888888;
    text-align: center;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .Product_card:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }

  img {
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    height: 150px;
    width: 220px;
  }

  .Product_name {
    padding: 1rem 1rem;
  }

  .Product_btn {
    padding: 1rem 1rem;
  }
  .back_logo {
    width: 2rem;
    height: 0rem;
    position: relative;
    left: 100px;
    top: 40px;
  }

  #goback {
    font-size: 4rem;
    cursor: pointer;
    color: #9a9fa5;
  }

  #goback:hover {
    font-size: 4rem;
    transform: scale(1.1);
    color: #36383b;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: 16rem;
      height: 110px;
      width: 154px;
    }

    .grid{
      flex-wrap: wrap;
    }

    .name {
      font-size: 2rem;
    }

    .Product_card {
      width: 16rem;
    }
  }
`;

export default SearchProduct;
