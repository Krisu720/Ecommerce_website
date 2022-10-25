import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./apiCalls";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    method: [],
    delivery: {
      name: "",
      price: 0,
    },
    promocode: {
      name: "",
      price: 0,
    },
    info: {
      email: "",
      phone_number: 0,
      name: "",
      surname: "",
      address: "",
      city: "",
      zipCode: 0,
    },
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      let totalPrice = 0;
      state.products.map(
        (item) => (totalPrice += item.productId.price * item.quantity)
      );
      state.total = totalPrice;
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item, index) => index !== action.payload
      );
      let totalPrice = 0;
      state.products.map(
        (item) => (totalPrice += item.productId.price * item.quantity)
      );
      state.total = totalPrice;
    },

    addMethod: (state, action) => {
      state.method = action.payload.method;
    },

    addDelivery: (state, action) => {
      state.delivery = {
        name: action.payload.delivery,
        price: action.payload.price,
      };
    },

    addPromocode: (state, action) => {
      let getCode =
        action.payload.name === undefined ? "" : action.payload.name;
      let getPrice = action.payload.name === "marzec15" ? -15 : 0;
      state.promocode = {
        name: getCode,
        price: getPrice,
      };
    },

    addInfo: (state, action) => {
      state.info = {
        ...state.info,
        ...action.payload,
      };
    },

    setInfo: (state, action) => {
      state.products = action.payload.products;
      let totalPrice = 0;
      state.products.map(
        (item) => (totalPrice += item.productId.price * item.quantity)
      );
      state.total = totalPrice;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addMethod,
  addDelivery,
  addPromocode,
  addInfo,
  setInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
