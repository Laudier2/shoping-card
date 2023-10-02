import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cart/cart";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleProductClick = (e) => {
    dispatch(addCart(e))
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.image}>
        <CustomButton startIcon={<BsCartPlus />} onClick={() => handleProductClick(product)} >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
