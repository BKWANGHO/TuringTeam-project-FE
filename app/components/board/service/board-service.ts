import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllboardsAPI } from "./board-api";

export const fetchAllboards : any = createAsyncThunk(
    'boards/findAllboards',
     async (page:number)=>{
    console.log('fetchAllboards page : ' + page)
    const data:any = await findAllboardsAPI(1);

    // const {messege,result}:any = data
    // console.log('----------api를 사용한경우-----------')
    console.log('messege : ' + data)
    // console.log(JSON.stringify(result))
    return data
})