function addToCart(id) {
  const add = localStorage.setItem("cart", JSON.stringify(id));
  return add;
}
export { addToCart };
