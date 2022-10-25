import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requests";
import { addProduct, removeProduct, setInfo } from "./cartRedux";
import { userData } from "../requests";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.reload();
  } catch (e) {
    dispatch(loginFailure());
  }
};

export const getInfo = async (dispatch, id) => {
  try {
    const res = await userRequest.get(`/cart/find/${id}`);
    dispatch(setInfo(res.data));
  } catch (e) {}
};

export const getAndAddProduct = async (dispatch, payload) => {
  try {
    const res = await publicRequest.get(`/products/find/${payload.id}`);
    dispatch(
      addProduct({
        productId: res.data,
        size: payload.size,
        quantity: payload.quantity,
      })
    );
    if(userData.currentUser!==null) {
    setTimeout(() => {
    const cart = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).cart
    ).products;

      userRequest.put(`/cart/${userData.currentUser._id}`, cart);
    }, 1);
  }
  } catch (e) {}
};

export const removeProductFromCart = async (dispatch, payload) => {
  try {
    dispatch(
      removeProduct(payload.id)
    );
    if(userData.currentUser!==null) {
    setTimeout(() => {
      const cart = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).cart
      ).products;
        userRequest.put(`/cart/${userData.currentUser._id}`, cart);
      }, 1);
    }
  } catch (e) {}
};
