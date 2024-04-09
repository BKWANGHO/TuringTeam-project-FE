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
import { Iboard } from "@/app/components/board/model/board";
import Columns from "@/app/components/board/module/board-columns";
import { getAllboards } from "@/app/components/board/service/board-slice";
import { findAllboards } from "@/app/components/board/service/board-service";
import { StyledDataGrid } from "@/app/components/common/style/board";
import { ClassNames } from "@emotion/react";


 const boardsPage : NextPage = ({data}:any)=> {
    const dispatch = useDispatch()
    const allboards: [] = useSelector(getAllboards)

    if(allboards !== undefined){
        console.log('allboards is not undefined')
    
    }else{
        console.log('allboards is undefined')
    }
    
    useEffect(() => {
        dispatch(findAllboards(10))
    }, [])
    
    return (<>
        <h2>게시판목록 Board</h2>
        <div style={{ height: "100%", width: "100%" }}>
      {allboards&&<DataGrid // 🔥 4
        rows={allboards}
        columns={Columns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
    </>)
}
export default boardsPage;