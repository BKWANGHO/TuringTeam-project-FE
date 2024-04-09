import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI } from "./user-api";


export const findAllUsers:any = createAsyncThunk(
    'users/findAllUsers',
    async (page:number)=>{
    const data : any =await findAllUsersAPI(10);

    // console.log('----------api를 사용한경우-----------')
    // console.log('messege : ' + data)
    return data
    }
)