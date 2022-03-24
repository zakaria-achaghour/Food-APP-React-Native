import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [
        'test 1',
        'test 2',
        'test 3',
        'test 4'
    ],
    cart: {},
    loading: true
}
const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers: {
        addCart: (state,action) =>{
            state.carts.push(action.payload)
        },
        updatedCart(state, action) {
            const index = state.carts.findIndex(cart => cart.id === action.payload.id);
            state.carts[index] = {
              ...state.carts[index],
              ...action.payload,
            };
        },
        
        deleteCart: (state, action) => {
            let index = state.carts.findIndex(({ id }) => id === action.payload.id);
             state.carts.splice(index, 1);
            // return state.filter((cart)=>cart.id!==action.payload.id)
        },

        getCarts: (state, action) => {
           state.carts;
        },
        getCart: (state, action) => {
            state.carts.find(cart => cart.id === action.payload);
         },

    },
    extraReducers: {
        // add your async reducers here
      }
})


export const { addCart, getCarts, deleteCart,updatedCart,getCart } = cartSlice.actions;


export default cartSlice.reducer;