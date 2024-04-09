import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI } from "./article.api";

export const findAllArticles : any = createAsyncThunk(
    'articles/findAllArticles',
     async (page:number)=>{
    const data:any = await findAllArticlesAPI(1);

    return data
})

