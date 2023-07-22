import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = ({
    products: [],
    cartProducts: [],
    cartTotal: 0,
    cartQuantity: 0,
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
        calculateTotals: (state) => {

            let quantity = 0;
            let total = 0;

            state.cartProducts.forEach((item) => {
                quantity += item.amount;
                total += item.amount * item.price;
            });

            state.cartQuantity = quantity;
            state.cartTotal = total;
        }
        
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

export const {addToCart, calculateTotals} = productsSlice.actions;

export default productsSlice.reducer;