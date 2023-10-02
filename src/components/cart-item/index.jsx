import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cart/cart";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()


  const handleRemoveClick = (id) => {
    dispatch(addCart(id))
  };

  const handleIncreaseClick = (e) => {
    dispatch(addCart(e))
  };

  const handleDecreaseClick = (id) => {
    dispatch(addCart(id))
  };

  //console.log(product.id)

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.image} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.cartQuantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={() => handleIncreaseClick(product)}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={() => handleRemoveClick(product.id)}
        aria-label={`Remove`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
