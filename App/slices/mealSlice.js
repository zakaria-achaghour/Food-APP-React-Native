import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    meals: [
        'test 1',
        'test 2',
        'test 3',
        'test 4'
    ],
    meal: {},
    loading: true
}
const mealSlice = createSlice({
    name:'meals',
    initialState,
    reducers: {
        addMeal: (state,action) =>{
            state.meals.push(action.payload)
        },
        updatedMeal(state, action) {
            const index = state.meals.findIndex(meal => meal.id === action.payload.id);
            state.meals[index] = {
              ...state.meals[index],
              ...action.payload,
            };
        },
        
        deleteMeal: (state, action) => {
            let index = state.meals.findIndex(({ id }) => id === action.payload.id);
             state.meals.splice(index, 1);
            // return state.filter((meal)=>meal.id!==action.payload.id)
        },

        getMeals: (state, action) => {
           state.meals;
        },
        getMeal: (state, action) => {
            state.meals.find(meal => meal.id === action.payload);
         },

    },
    extraReducers: {
        // add your async reducers here
      }
})


export const { addMeal, getMeals, deleteMeal,updatedMeal,getMeal } = mealSlice.actions;


export default mealSlice.reducer;