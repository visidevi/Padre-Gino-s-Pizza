import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Pizza from "./Pizza";
import Order from "./Order";
// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props?.name),
//     React.createElement("p", {}, props?.description),
//   ]);
// };
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Devi"),
  //   React.createElement(Pizza, {
  //     name: "Pizza1",
  //     description: "Tomato",
  //     key: 0,
  //   }),
  //   React.createElement(Pizza, {
  //     name: "Pizza1",
  //     description: "Tomato",
  //     key: 1,
  //   }),
  // ]);
  return (
    <StrictMode>
      <div>
        <h1>Pizza 2025</h1>
        {/* <Pizza name="Margarita"  description="Tomato Basil" />
       <Pizza name="Marinara"  description="Tomato" /> */}
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
