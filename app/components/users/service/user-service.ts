import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserAPI, findAllUsersAPI, findUserByIdAPI, modifyUserAPI, userCountAPI } from "./user-api";


export const findAllUsers:any = createAsyncThunk(
    'users/findAllUsers',
    async (page:number)=>{
    const data : any =await findAllUsersAPI(10);

    return data
    })

export const findUserById : any = createAsyncThunk(
    'users/findUserById',
     async (id:number)=>{
    const data:any = await findUserByIdAPI(id);
    return data
})

export const modifyUser : any = createAsyncThunk(
    'users/modifyUser',
     async (dto:{})=>{
    const data:any = await modifyUserAPI(dto);
    return data
})

export const userCount : any = createAsyncThunk(
    'users/userCount',
     async ()=>{
    const data:any = await userCountAPI();
    return data
})

export const deleteUser : any = createAsyncThunk(
    'users/delete',
     async (id:number)=>{
    const data:any = await deleteUserAPI(id);
    return data
})

