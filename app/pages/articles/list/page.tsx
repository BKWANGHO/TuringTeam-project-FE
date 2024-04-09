'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllArticles } from "@/app/components/article/service/article.service";
import { getAllArticles } from "@/app/components/article/service/article.slice";
import Columns from "@/app/components/article/module/article-columns";


const ArticlesPage: NextPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const allArticles: [] = useSelector(getAllArticles)

  if (allArticles !== undefined) {
    console.log('allArticles is not undefined')
  } else {
    console.log('allArticles is undefined')
  }

  useEffect(() => {
    dispatch(findAllArticles(10))
  }, [])

  return (<>
    <h2>개인페이지 Articles</h2>
    <div style={{ height: "100%", width: "100%" }}>
      {allArticles && <DataGrid // 🔥 4
        rows={allArticles}
        columns={Columns()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>

  </>)
}
export default ArticlesPage;