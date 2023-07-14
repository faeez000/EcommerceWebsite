import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import statusCode from "../utils/StatusCode";

const initialState ={
    data : [],
    status:statusCode.IDLE
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers :{
        // fetchProducts:(state,action)=>{
        //     state.data = action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status= statusCode.LOADING
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = statusCode.IDLE
        })
        .addCase(getProducts.rejected, (state,action)=>{
            state.status = statusCode.ERROR
        })
    }
    
})

export default productSlice.reducer; 
export const {fetchProducts} = productSlice.actions;

export const getProducts = createAsyncThunk('product/get',async ()=>{
    const data = await fetch("https://fakestoreapi.com/products")
      const result = await data.json()
    
      return result
})

// export function getProducts (){
//     return async function getProductThunk(dispatch,getState){
//      const data = await fetch("https://fakestoreapi.com/products")
//       const result = await data.json()
      
//       dispatch(fetchProducts(result))
//     }
// }