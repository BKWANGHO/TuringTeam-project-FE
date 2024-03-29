import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "./article.model";
import { getAllArticlesAPI } from "./article.api";
import axios from "axios";
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";

export const getArticles : any = createAsyncThunk(
    'articles/getAllArticles',
     async (page:number)=>{
    console.log('getArticles page : '+page)
    const {messege,result}:any = await getAllArticlesAPI(1);
    console.log('----------api를 사용한경우-----------')
    console.log('messege : ' + messege)
    console.log(JSON.stringify(result))
})