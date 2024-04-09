"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { findAllboards } from "./board-service";
import { initialState } from "./board-init";


const boardThunks = [findAllboards]

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

export const boardSlice = createSlice({
    name : 'boards',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;

        builder
        .addCase(findAllboards.fulfilled,handleFulfilled)
    }
})
export const getAllboards =(state:any )=> {
return state.board.array;
}



export const{} = boardSlice.actions

export default boardSlice.reducer;