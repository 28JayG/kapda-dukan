import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/crown.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { HeaderContainer, LogoContainer, OptionsContainer, LinkOption, DivOption } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
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
        <DivOption className="option" onClick={() => auth.signOut()}>
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
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
