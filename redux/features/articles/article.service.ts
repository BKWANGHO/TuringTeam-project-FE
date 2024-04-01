import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllArticlesAPI } from "./article.api";

export const fetchAllArticles : any = createAsyncThunk(
    'articles/fetchAllArticles',
     async (page:number)=>{
    console.log('fetchAllArticles page : ' + page)
    const data:any = await fetchAllArticlesAPI(1);

    const {messege,result}:any = data
    // console.log('----------api를 사용한경우-----------')
    // console.log('messege : ' + messege)
    // console.log(JSON.stringify(result))
    return data
})