import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../Component/HeroSection";
import { fetch_Data } from "../ReduxStore.jsx/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Product_Page from "../Component/Product_Page";
import Error_Page from "../Component/Error_Page";
import styled from "styled-components";
import Spinner from "../Component/Spinner";

const Product = () => {
  const data = {
    Title: "Globle-Market",
    Sub_Title: "Today 20% Off Product",
  };

  const Dispach = useDispatch();

  // coll Api Here

  useEffect(() => {
    Dispach(fetch_Data());
  }, []);

  const { isLoading, error, Product } = useSelector(
    (state) => state.Product_data
  )

  return (
    <Wrapper>
      <div className="container">
        <HeroSection data={data} />

        <div className="main">
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <Error_Page />
          ) : (
            <>
              <div className="container">
                <div className="main_Pro">
                  {Product.map((products) => {
                    return (
                      <Product_Page products={products} key={products._id} />
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    width: 100%;
    height: 100%;
    margin-bottom: 8rem;
  }
  .main_Pro {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;
    gap: 6rem 0rem;
  }


`;

export default Product;
