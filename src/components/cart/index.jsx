// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
//import rootReducer from "../../redux/root-reducer";
import CartItem from "../cart-item/index"

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const product = useSelector((rootReducer) => rootReducer.cartReducer)

  console.log(product.state[0])

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {product.state.map((product) => <CartItem product={product} />)}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
