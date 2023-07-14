import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProductToCart : (state,action)=>{
            state.push(action.payload)
        },
        removeProductFromCart : (state,action)=>{
            return state.filter(item=>item.id !== action.payload)
        }

    }
})

export default cartSlice.reducer; 
export const {addProductToCart,removeProductFromCart} = cartSlice.actions;