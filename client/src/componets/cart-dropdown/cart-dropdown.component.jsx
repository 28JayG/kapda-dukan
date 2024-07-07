import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className='empty-message'>Your cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
