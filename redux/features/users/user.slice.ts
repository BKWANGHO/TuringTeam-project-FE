"use client"; 

import { createSlice } from "@reduxjs/toolkit";

interface IUser{
    id : number
    username : string
    password : string
    name : string
    phone : string
    addressId : number
    job : string
    height : number
    weight : number
}


const initialState:IUser={
    id : 0,
    username : '',
    password : '',
    name : '',
    phone : '',
    addressId : 0,
    job : '',
    height : 0,
    weight : 0
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{}
})

export const{} = userSlice.actions

export default userSlice.reducer;