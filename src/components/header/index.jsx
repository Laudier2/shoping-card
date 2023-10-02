import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";


// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities
function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const currentQuantityCart = useSelector(cartItems => cartItems.cart.cartItems.length)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
  };

  const handleLogoutClick = () => {
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentQuantityCart ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>
          <b>{currentQuantityCart}</b>
          {currentQuantityCart > 0 ?
            <SlBasketLoaded style={{ fontSize: 30 }} />
            : <SlBasket style={{ fontSize: 30 }} />
          }
        </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
