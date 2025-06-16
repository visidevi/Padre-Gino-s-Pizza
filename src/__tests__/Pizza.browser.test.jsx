import { cleanup, render } from "@testing-library/react";
import { test, expect, afterEach } from "vitest";
import Pizza from "../Pizza.jsx";

afterEach(cleanup);

test("alt text renders on image", async () => {
  const name = "My Favorite Pizza";
  const src = "http://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );
  const img = await screen.getByRole("img");
  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
