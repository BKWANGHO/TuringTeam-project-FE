import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI } from "./article.api";

export const findAllArticles : any = createAsyncThunk(
    'articles/findAllArticles',
     async (page:number)=>{
    console.log('fetchAllArticles page : ' + page)
    const data:any = await findAllArticlesAPI(1);

    // const {messege,result}:any = data
    // console.log('----------api를 사용한경우-----------')
    console.log('messege : ' + data)
    // console.log(JSON.stringify(result))
    return data
})