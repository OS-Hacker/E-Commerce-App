import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import Cart_Page from "../Component/Cart_Page";
import Empty_cart from "../Component/Empty_cart";
import Scrollbars from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../ReduxStore.jsx/CartSlice";
import INR from "../helper/INR";
import Checkout from "../Component/Checkout";

const Cart = () => {

  const {TotalQuntaity,TotalPrice, cartProduct } = useSelector((state) => state.cartData);

  const goproduct = useNavigate()

  const dispech = useDispatch()

  useEffect(()=>{
    dispech(getCartTotal())
  },[cartProduct])


  return (
    <Wrapper>
      {cartProduct.length === 0 ? (
        <Empty_cart />
      ) : (
        <div className="container mt-5 mb-5" style={{ backgroundColor: "#f2f2f3" }}>
          <div className="back_logo">
            <i className="bi bi-arrow-left-circle-fill" id="goback" onClick={()=>goproduct(-1)}></i>
          </div>

          <h2 style={{position:"relative",left:"50px",top:"40px"}}>Shopping Cart</h2>
          <h4 style={{position:"relative",left:"50px",top:"40px",color:"GrayText"}}>Deselect all items</h4>

       <hr style={{marginTop:"50px"}} />

          <div className="main">


            <Scrollbars style={{ width: 700, height: 400 }}>
              <div className="cart_pro">
                {cartProduct.map((products) => {
                  return <Cart_Page products={products} key={products._id} />;
                })}
              </div>
            </Scrollbars>
            <div className="col-lg-3  columns">
              <div className="card mt-2">
                <div className="card-header py-3 ">
                  <h3 className="mb-0">Summary</h3>
                </div>
                <div className="card-body w-100">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <h3>TotalQuntaity</h3>
                      <h3>{TotalQuntaity}</h3>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <h3>Subtotal</h3>
                      <h3>{<INR price={TotalPrice}/>}</h3>
                    </li>
                  </ul>
                  <div className="text-center ">
                     <Checkout TotalPrice={TotalPrice}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    padding: 1rem 0rem;
  }
  
  .container {
    border-start-start-radius: 2rem;
    border-start-end-radius: 2rem;
  }

  .cart_pro {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .back_logo {
    width: 2rem;
    height: 0rem;
    
  }

 #goback {
    font-size: 4rem;
    cursor: pointer;
    color: #9a9fa5;
    
  }
  
 #goback:hover{
    font-size: 4rem;
    transform: scale(1.1);
    color: #36383b;
  }

  @media (max-width:${({theme})=>theme.media.mobile}) {
      .columns{
         width: 80%;
      }
  }
`;

export default Cart;
