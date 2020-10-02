const sortAlphabethicly = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
};

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
            ].sort((a, b) => sortAlphabethicly(a, b))
          : [...state.cart, action.payload].sort((a, b) =>
              sortAlphabethicly(a, b)
            ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };

    case "PUBLISH_PRODUCT":
      return {
        ...state,
        items: [...state.items, action.payload].sort((a, b) =>sortAlphabethicly(a, b)),
      };

    case "EDIT_PRODUCT":
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.payload.id),
          action.payload,
        ].sort((a, b) => sortAlphabethicly(a, b)),
      };
    default:
      return state;
  }
};

export default reducer;
