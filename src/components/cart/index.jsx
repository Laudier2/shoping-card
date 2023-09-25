// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
//import rootReducer from "../../redux/root-reducer";
import CartItem from "../cart-item/index"
import { SlBasket } from "react-icons/sl";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const cart = useSelector((state) => state.cart)

  //console.log(cart)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>
          <SlBasket /> Seu Carrinho
        </Styles.CartTitle>
        {cart.map((product) => <CartItem key={product.id} product={product} />)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
