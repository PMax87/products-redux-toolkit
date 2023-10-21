export const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
};
