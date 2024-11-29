import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // if using thunk for async actions
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
