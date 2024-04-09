'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { API } from "@/app/components/common/enums/API";
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllArticles } from "@/app/components/article/service/article.service";
import { getAllArticles } from "@/app/components/article/service/article.slice";
import { IArticle } from "@/app/components/article/model/article";
import Columns from "@/app/components/article/module/article-columns";


 const ArticlesPage : NextPage = ({data}:any)=> {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
        console.log('allArticles is not undefined')
    
        // console.log('length is '+ allArticles.length)
        // for(let i=0; i< allArticles.length; i++){
        //     console.log(JSON.stringify(allArticles[i]))
        // }
    }else{
        console.log('allArticles is undefined')
    }
    
    useEffect(() => {
        dispatch(findAllArticles(10))
    }, [])
    
    return (<>
        <h2>개인페이지 Board</h2>
        <div style={{ height: 400, width: "100%" }}>
      <DataGrid // 🔥 4
        rows={allArticles}
        columns={Columns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />
    </div>
        {/* <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={allArticles}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box> */}
    </>)
}
export default ArticlesPage;