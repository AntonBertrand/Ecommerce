import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = ({
    products: [],
    cartProducts: [],
    status: null
});

export const productsFetch = createAsyncThunk(
    // Action type (name of slice/action creator)
    "products/productsFetch",
    // Payload Creator
    async ( ) => {
            const response = await fetch('http://localhost:4000/api/products');
            const json = await response.json();
            return json;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartProducts.push(action.payload)
        },
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },

        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },

        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        }
    }
})

export const {addToCart} = productsSlice.actions;

export default productsSlice.reducer;