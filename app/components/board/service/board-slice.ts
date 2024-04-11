"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { findAllboards, findBoardById } from "./board-service";
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
        .addCase(findAllboards.fulfilled,(state :any, {payload}:any) => {state.array = payload})
        .addCase(findBoardById.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 
    }
})
export const getAllboards =(state:any )=> state.board.array;
export const getBoardById =(state:any )=> state.board.json;



export const{} = boardSlice.actions

export default boardSlice.reducer;