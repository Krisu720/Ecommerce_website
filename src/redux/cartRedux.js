import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
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
      state.products.push({
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
        price: action.payload.price * action.payload.quantity,
        size: action.payload.size,
        amount: action.payload.quantity,
      });
      state.quantity = state.products.length;
      let totalPrice = 0;
      state.products.map((item) => (totalPrice += item.price));
      state.total = totalPrice;
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.quantity = state.products.length;
      let totalPrice = 0;
      state.products.map((item) => (totalPrice += item.price));
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
  },
});

export const {
  addProduct,
  removeProduct,
  addMethod,
  addDelivery,
  addPromocode,
  addInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
