//import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";
import { useSelector } from "react-redux";

// Styles
import * as Styles from "./styles";
//const products = [{ name: "Teste" }]


const Products = () => {

  const products = useSelector(productSlice => productSlice.products.items)
  //console.log(products)

  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Styles.Container>
  );
};

export default Products;
