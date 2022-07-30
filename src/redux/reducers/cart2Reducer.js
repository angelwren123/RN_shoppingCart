import {
  handleAddToCart,
  handleDecreaseItemCart,
  handleDeleteItemCart,
  handleIncreaseItemCart,
} from '../../utils/handleCart';
import * as Types from '../constants/constants';
import { getStorage } from './getStorage';
import { setStorage } from './setStorage';
const initialState = [];
const cart2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_DATA_CART:
      return [...action.payload];
    case Types.ADD_TO_CART:
      // console.log(action.payload.product);
      const newProduct = {
        id: action.payload.product.id,
        title: action.payload.product.title,
        price: action.payload.product.price,
        images: action.payload.product.images[0],
        color: action.payload.color,
        quantity: 0,
      };

      getStorage()
        .then(data => {
          const cart = [...data];
          const newCartStorage = handleAddToCart(cart, newProduct);
          setStorage([...newCartStorage]);
        })
        .catch(err => console.log(err.message));
      const cartState = [...state];
      const newCart = handleAddToCart(cartState, newProduct);
      return [...newCart];

    case Types.DELETE_ITEM_CART:
      getStorage()
        .then(data => {
          const cart = [...data];
          const newCartStorage = handleDeleteItemCart(cart, action.payload);
          setStorage([...newCartStorage]);
        })
        .catch(err => console.log(err.message));
      const cart2 = [...state];
      handleDeleteItemCart(cart2, action.payload);
      return [...cart2];

    case Types.INCREASE_ITEM_CART:

      getStorage().then(data => {
        const cart = [...data];
        const newCartStorage = handleIncreaseItemCart(cart, action.payload);
        setStorage([...newCartStorage]);
      });
      const cart3 = [...state];
      handleIncreaseItemCart(cart3, action.payload);
      return [...cart3];

    case Types.DECREASE_ITEM_CART:
      getStorage().then(data => {
        const cart = [...data];
        const newCartStorage = handleDecreaseItemCart(cart, action.payload);
        setStorage([...newCartStorage]);
      });
      const cart4 = [...state];
      handleDecreaseItemCart(cart4, action.payload);
      return [...cart4];

    default:
      return state;
  }
};
export default cart2Reducer;
