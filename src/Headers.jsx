import { useContext } from "react";
// import { Link } from "@tanstack/react-router";
import { CartContext } from "./contexts";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      {/* <Link to={"/"}>
      
      </Link> */}
      <h1 className="logo">Padre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒
        <span data-testid="cart-number" className="nav-cart-number">
          {cart?.length}
        </span>
      </div>
    </nav>
  );
}
