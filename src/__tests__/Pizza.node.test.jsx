import { cleanup, render } from "@testing-library/react";
import { test, expect, afterEach } from "vitest";
import Pizza from "../Pizza.jsx";

afterEach(cleanup);

test("Pizza.jsx", async () => {
  const name = "My Favorite Pizza";
  const src = "http://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="Dummy Name" description="super cool pizza" />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe("http://picsum.photos/300");
});
