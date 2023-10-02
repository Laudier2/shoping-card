// Styles
import * as Styles from "./styles";
//import rootReducer from "../../redux/root-reducer";
import CartItem from "../cart-item/index"
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector(cartItems => cartItems.cart.cartItems)

  const cart2 = []

  console.log(cart)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          <SlBasket /> Seu Carrinho
        </Styles.CartTitle>
        {cart.map((product) =>
          <div key={product.id}>
            <CartItem key={product.id} product={product} />
          </div>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
