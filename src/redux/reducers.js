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
        cart: [
          ...state.cart.filter((item) => item.id !== action.payload.id)
        ],
      };
    default:
      return state;
  }
};

export default reducer;
