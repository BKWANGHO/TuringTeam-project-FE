import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersAPI } from "./user-api";


export const fetchAllUsers:any = createAsyncThunk(
    'users/fetctAllUsers',
    async (page:number)=>{
    const data : any =await fetchAllUsersAPI(10);

    // console.log('----------api를 사용한경우-----------')
    // console.log('messege : ' + data)
    return data
    }
)