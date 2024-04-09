import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllboardsAPI } from "./board-api";

export const findAllboards : any = createAsyncThunk(
    'boards/findAllboards',
     async (page:number)=>{
    const data:any = await findAllboardsAPI(1);
    return data
})

