import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productState {
  products: string[];
  cartProducts: ICartProducts[];
  cartTotal: number;
  cartQuantity: number;
  status: string;
  isLoading: boolean;
}

interface ICartProducts {
  _id: number;
  title: string;
  desc: string;
  features: string;
  image: string;
  image3: string;
  image4: string;
  rating: number;
  price: number;
  amount: number;
}

const initialState: productState = {
  products: [],
  cartProducts: [],
  cartTotal: 0,
  cartQuantity: 0,
  status: "",
  isLoading: false,
};

export const productsFetch = createAsyncThunk(
  // Action type (name of slice/action creator)
  "products/productsFetch",
  // Payload Creator
  async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}products`);
    const json = await response.json();
    return json;
  }
);

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
  extraReducers: {
    [productsFetch.pending.toString()]: (state, action) => {
      state.status = "pending";
    },

    [productsFetch.fulfilled.toString()]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },

    [productsFetch.rejected.toString()]: (state, action) => {
      state.status = "rejected";
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
