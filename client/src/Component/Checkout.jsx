import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "../style/Button";

const Checkout = ({ TotalPrice }) => {
  const tokenHandler = (token) => {
    console.log(token);
  };

  return (
    <>
      <StripeCheckout
        amount={TotalPrice * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51NjwfhSJghV1TCVo9kI1xKfs866zB6BZKr0pgIWIRyHHowtPqby9sDxmDFAj3JC9WzDpvKpzNlyoiXzywkWj3Ytj00e5YzrPUO"
        currency="INR"
      >
        <Button className="w-100">Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
