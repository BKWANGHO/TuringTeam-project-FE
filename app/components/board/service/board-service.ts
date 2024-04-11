import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllboardsAPI, findBoardByIdAPI } from "./board-api";

export const findAllboards : any = createAsyncThunk(
    'boards/findAllboards',
     async (page:number)=>{
    const data:any = await findAllboardsAPI(1);
    return data
})

export const findBoardById : any = createAsyncThunk(
    'boards/findboardById',
     async (id:number)=>{
    const data:any = await findBoardByIdAPI(id);
    return data
})

