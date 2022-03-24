import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [
        'test 1',
        'test 2',
        'test 3',
        'test 4'
    ],
    order: {},
    loading: true
}
const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers: {
        addOrder: (state,action) =>{
            state.orders.push(action.payload)
        },
        updatedOrder(state, action) {
            const index = state.orders.findIndex(order => order.id === action.payload.id);
            state.orders[index] = {
              ...state.orders[index],
              ...action.payload,
            };
        },
        
        deleteOrder: (state, action) => {
            let index = state.orders.findIndex(({ id }) => id === action.payload.id);
             state.orders.splice(index, 1);
            // return state.filter((order)=>order.id!==action.payload.id)
        },

        getOrders: (state, action) => {
           state.orders;
        },
        getOrder: (state, action) => {
            state.orders.find(order => order.id === action.payload);
         },

    },
    extraReducers: {
        // add your async reducers here
      }
})


export const { addOrder, getOrders, deleteOrder,updatedOrder,getOrder } = orderSlice.actions;


export default orderSlice.reducer;