'use client'

import { createSlice } from "@reduxjs/toolkit";
import { findAllUsers, findUserById, login, modifyUser, userCount } from "./user-service";
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
        .addCase(findAllUsers.fulfilled,(state :any, {payload}:any) => {state.array = payload})
        .addCase(findUserById.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 

        .addCase(modifyUser.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 
        .addCase(userCount.fulfilled, (state :any, {payload}:any) => {state.count = payload}) 
        .addCase(login.fulfilled, (state :any, {payload}:any) => {state.msg = payload}) 
    }
})

export const getAllUsers = (state:any)=>state.user.array;   
export const getUserById =(state:any )=>state.user.json;
export const getLogin =(state:any )=>state.user.msg;
export const getUserCount =(state:any )=>state.user.count;


export const{} = userSlice.actions

export default userSlice.reducer;