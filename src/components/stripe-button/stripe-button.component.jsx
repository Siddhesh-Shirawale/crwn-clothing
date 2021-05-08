import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey =
      "pk_test_51IotlySF4F19KaqCS4xFi5v390goLvNnzUO8qjMUq3zG0Owz7QfGyMiJlVzQt8v8sBEsNMMgwi2SElO7fhlFmhcD00ZwT5tb2e";

   const onToken = (token) => {
      console.log(token);
      alert("Payment Successful");
   };
   return (
      <StripeCheckout
         label="Pay Now"
         name="CRWN Clothing Ltd."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is ₹${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;
