import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "./Cart";

test("Cart component renders correctly", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
