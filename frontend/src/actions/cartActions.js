import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstant';

export const addCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty: qty
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
