'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/board/module/board-columns";
import { getAllboards } from "@/app/components/board/service/board-slice";
import { findAllboards } from "@/app/components/board/service/board-service";


 const boardsDetailPage : NextPage = ({data}:any)=> {
   
    return (<>
        <h1>게시판 상세페이지</h1>
        {/* <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={allboards}
        columns={Columns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />
    </div> */}
    </>)
}
export default boardsDetailPage;