const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exist = state.cart.find(item => item.id === action.payload.id)
      return {
        ...state,
        cart: exist ? [...state.cart.filter(item => item.id !== action.payload.id), action.payload] : [...state.cart, action.payload]
      }
    default:
      return state;
  }
};

export default reducer;
