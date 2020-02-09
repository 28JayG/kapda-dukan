import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_sxLf97rUFDsIVukh3HlymHl100ZZWVIes5";

  const onToken = () => {
    console.log("token");
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      billingAddress
      shippingAddress
      name="Kapda Dukan"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
