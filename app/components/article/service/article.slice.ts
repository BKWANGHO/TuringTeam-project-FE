"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { findAllArticles} from "./article.service";


const articleThunks = [findAllArticles]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected:'rejected'
}

const handlePending =(state :any)=> {
 
}
const handleFulfilled =(state :any, {payload}:any) => {
 state.array = payload
//  console.log(state.array)
}

const handleRejected =(state :any)=> {

}

export const articleSlice = createSlice({
    name : 'articles',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled,handleFulfilled)
    }
})
export const getAllArticles =(state:any )=> {
console.log(JSON.stringify(state.article.array))
return state.article.array;
}



export const{} = articleSlice.actions

export default articleSlice.reducer;