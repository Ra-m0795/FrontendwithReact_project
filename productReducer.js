// cartReducer.js
const initialState = { items: [], totalCount: 0 };

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add item logic
      break;
    case 'REMOVE_FROM_CART':
      // Remove item logic
      break;
    default:
      return state;
  }
}
export default cartReducer;
// cartActions.js
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

