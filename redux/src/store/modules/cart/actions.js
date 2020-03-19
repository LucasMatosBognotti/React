export function AddToCartRequest(id) { /* HOME */
  return {
    type: 'ADD_REQUEST',
    id,
  };
}

export function AddToCartSuccess(product) { /* HOME */
  return {
    type: 'ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) { /* CART */
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}

export function updateQuant(id, amount) {
  return {
    type: 'UPDATE_QUANT',
    id,
    amount,
  };
}