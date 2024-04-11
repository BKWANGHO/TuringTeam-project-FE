'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/article/module/article-columns";
import { articleCount, findAllArticles } from '@/app/components/article/service/article.service';
import { getAllArticles, getArtilceCount } from '@/app/components/article/service/article.slice';
import articlesColums from '@/app/components/article/module/article-columns';


const ArticlesPage: NextPage = ({ data }: any) => {
  const dispatch = useDispatch()
  const allArticles: [] = useSelector(getAllArticles)
  const getArticleCount: number = useSelector(getArtilceCount)

  if (allArticles !== undefined) {
    console.log('allArticles is not undefined')
  } else {
    console.log('allArticles is undefined')
  }

  useEffect(() => {
    dispatch(articleCount())
    dispatch(findAllArticles(10))
  }, [])

  return (<>
    <h2> Articles</h2>
    <h1>게시글 수 : {getArticleCount}</h1>
    <div style={{ height: 400, width: "100%" }}>
      {allArticles && <DataGrid
        rows={allArticles}
        columns={articlesColums()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>

  </>)
}
export default ArticlesPage;