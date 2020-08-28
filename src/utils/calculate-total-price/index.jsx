export const calculateTotalPrice = (currCart) => {
    return parseFloat(currCart
      .reduce((total, item) => total + item.qty * item.price, 0)
      .toFixed(2));
  };