import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Istate } from "../interfaces/interfaces";

const initialState: Istate = {
  products: [],
  cartProducts: [],
  cartTotal: 0,
  cartQuantity: 0,
  status: "",
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      let dupeFound = false;
      const id = action.payload._id;

      state.cartProducts.forEach((item) => {
        if (item._id === id) {
          const quantity = action.payload.amount;
          item.amount = item.amount + quantity;
          dupeFound = true;
        }
      });

      if (!dupeFound) {
        state.cartProducts.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartProducts = state.cartProducts.filter((item) => item._id != id);
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
    incrementAmount: (state, action) => {
      const id = action.payload;

      state.cartProducts.forEach((item) => {
        if (item._id === id) {
          item.amount += 1;
        }
      });
    },
    decrementAmount: (state, action) => {
      const id = action.payload;

      state.cartProducts.forEach((item) => {
        if (item._id === id) {
          if (item.amount === 1) {
            state.cartProducts = state.cartProducts.filter(
              (item) => item._id != id
            );
          }

          item.amount -= 1;
        }
      });
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;

      state.cartProducts.forEach((item) => {
        quantity += item.amount;
        total += item.amount * item.price;
      });

      state.cartQuantity = quantity;
      state.cartTotal = total;
    },
    setLoading: (state, action) => {
      if (action.payload) {
        state.isLoading = true;
      } else {
        state.isLoading = false;
      }
    },
  },
});

export const {
  addToCart,
  calculateTotals,
  incrementAmount,
  decrementAmount,
  removeFromCart,
  clearCart,
  setLoading,
} = productsSlice.actions;

export default productsSlice.reducer;
