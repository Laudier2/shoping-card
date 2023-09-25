import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cart/cart";

const CartItem = ({ product }) => {

  const dispatch = useDispatch()

  const handleRemoveClick = (id) => {
    dispatch(removeItem(id))
    console.log(id)
  };

  const handleIncreaseClick = () => { };

  const handleDecreaseClick = () => { };

  //console.log(product.product.id)

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.product.name}</p>
        <p>R${product.product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={() => handleRemoveClick(product.product.id)}
        aria-label={`Remove`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
