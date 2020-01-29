import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem item={cartItem} key={cartItem.id} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
