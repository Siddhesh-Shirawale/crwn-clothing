import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey =
      "pk_test_51IotlySF4F19KaqCS4xFi5v390goLvNnzUO8qjMUq3zG0Owz7QfGyMiJlVzQt8v8sBEsNMMgwi2SElO7fhlFmhcD00ZwT5tb2e";

   const onToken = (token) => {
      axios({
         url: "payment",
         method: "post",
         data: {
            amount: priceForStripe,
            token: token,
         },
      })
         .then((response) => {
            alert("Payment successful");
         })
         .catch((error) => {
            console.log("Payment error: ", JSON.parse(error));
            alert("There was an issue with your payment");
         });
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
