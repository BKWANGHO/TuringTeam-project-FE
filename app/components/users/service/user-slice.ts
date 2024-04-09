'use client'

import { createSlice } from "@reduxjs/toolkit";
import { findAllUsers } from "./user-service";
import { initialState } from "./user-init";


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

export const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{},
    extraReducers : builder =>{
        const {pending,rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled,handleFulfilled)
        
    }
})

export const getAllUsers = (state:any)=>{
    return state.user.array;
}   

export const{} = userSlice.actions

export default userSlice.reducer;