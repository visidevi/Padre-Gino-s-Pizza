const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const useCurrency = (price) => {
  return intl.format(price);
};

export const priceConverter = (price) => intl.format(price);
