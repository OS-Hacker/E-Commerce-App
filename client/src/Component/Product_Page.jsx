import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import { addToCart } from "../ReduxStore.jsx/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import INR from "../helper/INR";

const Product_Page = ({ products }) => {
  const { slug, image, title, price } = products;

  const gocart = useNavigate();

  const Dispech = useDispatch();

  const addCartHandler = (e, products) => {
    e.preventDefault();

    Dispech(addToCart(products));

    gocart("/Cart");
  };

  

  return (
    <Wrapper>
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
            <Button
              onClick={(e) => addCartHandler(e, products)}
              className="cart-btn"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </NavLink>
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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    img {
      width: 16rem;
      height: 110px;
      width: 154px;
    }

    .name {
      font-size: 2rem;
    }

    .Product_card {
      width: 16rem;
    }

    .cart-btn {
      font-size: 1.2rem;
    }
  }
`;

export default Product_Page;
