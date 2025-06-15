import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Headers";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { CartContext } from "./contexts";
const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
