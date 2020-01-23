import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherCBProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherCBProps}
  >
    {children.toUpperCase()}
  </button>
);

export default CustomButton;
