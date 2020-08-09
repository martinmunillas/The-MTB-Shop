const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: exist
          ? [
              ...state.cart.filter((item) => item.id !== action.payload.id),
              action.payload,
            ]
          : [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };

    case "PUBLISH_PRODUCT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "EDIT_PRODUCT":
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.payload.id),
          action.payload,
        ]
      };
    default:
      return state;
  }
};

export default reducer;
