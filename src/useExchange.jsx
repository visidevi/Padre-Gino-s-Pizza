export const useExchange = () => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
};
