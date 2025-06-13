import Pizza from "./Pizza";

export default function Order() {
  const pizzaType = "peperoni";
  const pizzaSize = "M";
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div className="">
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="peperoni">The peperoni</option>
              <option value="hawaiian">The Hawaiian</option>
              <option value="big_meat">The big Meat</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="s"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-s">Large</label>
              </span>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  );
}
