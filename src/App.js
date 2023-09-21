import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header";
import Products from "./components/products";

const App = () => {

  const product = useSelector(products => products.cartReducer)

 // console.log(product)

  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default App;
