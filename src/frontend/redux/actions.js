export const addToCart = (payload) => ({
  type: "ADD_TO_CART",
  payload,
});

export const removeFromCart = (payload) => ({
  type: "REMOVE_FROM_CART",
  payload,
});

export const publishProduct = payload => ({
  type: "PUBLISH_PRODUCT",
  payload
})

export const editProduct = payload => ({
  type: "EDIT_PRODUCT",
  payload
})