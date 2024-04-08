'use client'

import { fetchAllUsers } from "@/app/components/users/service/user-service";
import { getAllUsers } from "@/app/components/users/service/user-slice";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UsersColums from "@/app/components/users/module/user-columns";
import { UserColumn } from "@/app/components/users/model/user-column";


const UsersPage : NextPage = ()=>{
    const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch()
    const allUsers : [] = useSelector(getAllUsers)

    if(allUsers !== undefined){
      console.log('allUsers is not undefined')
      console.log(allUsers)
      // console.log('length is '+ allUsers.length)
      // for(let i=0; i< allUsers.length; i++){
          // console.log(JSON.stringify(allUsers[i]))
      // }
  }else{
      console.log('allUsers is undefined')
  }

    useEffect(()=>{
        dispatch(fetchAllUsers(1))
    },[])


return(<>
<h1>사용자 목록</h1>
      <div style={{ height: 400, width: "100%" }}>
      <DataGrid // 🔥 4
        rows={allUsers}
        columns={UsersColums()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />
    </div>

</>)

}
export default UsersPage;