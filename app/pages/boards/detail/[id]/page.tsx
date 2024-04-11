'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/board/module/board-columns";
import { getAllboards, getBoardById } from "@/app/components/board/service/board-slice";
import { findAllboards, findBoardById } from "@/app/components/board/service/board-service";
import { MyTypography } from '@/app/components/common/style/cell';


export default function boardsDetailPage(props:any){
   
  const dispatch = useDispatch()
  const findBoard = useSelector(getBoardById)

  console.log(JSON.stringify(findBoard))

  useEffect(() => {
    dispatch(findBoardById(props.params.id))
  }, [])



    return (<>
        <h1>게시판 상세페이지</h1>
        <span>ID : {MyTypography(props.params.id,"1.2rem")}</span>
        <span>게시판 이름 : {MyTypography(findBoard.boardName,"1.2rem")}</span>
        <span>게시판 타입 : {MyTypography(findBoard.boardType,"1.2rem")}</span>
        <span>생성일 : {MyTypography(findBoard.regDate,"1.2rem")}</span>
        <span>수정일 : {MyTypography(findBoard.modDate,"1.2rem")}</span>
    </>)
}