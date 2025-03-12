import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import { Container } from "react-bootstrap";
import Home from "./Home/Home";
import { CartProvider } from "./AddToCartComp/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

export default App;
