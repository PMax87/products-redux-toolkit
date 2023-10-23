export const formatPrice = (price: number): string => {
  if (price && !isNaN(price)) {
    const formattedPrice = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(price);
    return formattedPrice;
  }
  return "Errore nel calcolo del prezzo";
};
