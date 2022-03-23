import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        'test 1',
        'test 2',
        'test 3',
        'test 4'
    ],
    category: {},
    loading: true
}
const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers: {
        addCategory: (state,action) =>{
            state.categories.push(action.payload)
        },
        updatedCategory(state, action) {
            const index = state.categories.findIndex(category => category.id === action.payload.id);
            state.categories[index] = {
              ...state.categories[index],
              ...action.payload,
            };
        },
        
        deleteCategory: (state, action) => {
            let index = state.categories.findIndex(({ id }) => id === action.payload.id);
             state.categories.splice(index, 1);
            // return state.filter((category)=>category.id!==action.payload.id)
        },

        getCategories: (state, action) => {
           state.categories;
        },
        getCategory: (state, action) => {
            state.categories.find(category => category.id === action.payload);
         },

    },
    extraReducers: {
        // add your async reducers here
      }
})


export const { addCategory, getCategories, deleteCategory,updatedCategory,getCategory } = categorySlice.actions;


export default categorySlice.reducer;