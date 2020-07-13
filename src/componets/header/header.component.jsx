import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  LinkOption,
  DivOption,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <LinkOption className="option" to="/shop">
        SHOP
      </LinkOption>
      <LinkOption className="option" to="/contact">
        CONTACT
      </LinkOption>
      {currentUser ? (
        <DivOption className="option" onClick={signOutStart}>
          SIGN OUT
        </DivOption>
      ) : (
        <LinkOption className="option" to="/signin">
          SIGN IN
        </LinkOption>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
