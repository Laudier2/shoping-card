import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";


// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();

  /*const { currentUser } = useSelector((state) => state.userReducer);
  const { ...products } = useSelector((state) => state.cartReducer);*/
  const length = useSelector((state) => state.cart.length)

  /*const productsCount = useMemo(() => {
    return products.state2.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [products.state2])*/

  //console.log(length)

  const currentUser = ''

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>
          <b>{length}</b>
          {length > 0 ?
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
