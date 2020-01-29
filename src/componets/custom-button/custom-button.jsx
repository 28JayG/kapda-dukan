import React from "react";

import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherCBProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} 
    ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherCBProps}
  >
    {children.toUpperCase()}
  </button>
);

export default CustomButton;
