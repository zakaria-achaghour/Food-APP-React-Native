import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        'test 1',
        'test 2',
        'test 3',
        'test 4'
    ],
    user: {},
    loading: true
}
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser: (state,action) =>{
            state.users.push(action.payload)
        },
        updatedUser(state, action) {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            state.users[index] = {
              ...state.users[index],
              ...action.payload,
            };
        },
        
        deleteUser: (state, action) => {
            let index = state.users.findIndex(({ id }) => id === action.payload.id);
             state.users.splice(index, 1);
            // return state.filter((user)=>user.id!==action.payload.id)
        },

        getUsers: (state, action) => {
           state.users;
        },
        getUser: (state, action) => {
            state.users.find(user => user.id === action.payload);
         },

    },
    extraReducers: {
        // add your async reducers here
      }
})


export const { addUser, getUsers, deleteUser,updatedUser,getUser } = userSlice.actions;


export default userSlice.reducer;