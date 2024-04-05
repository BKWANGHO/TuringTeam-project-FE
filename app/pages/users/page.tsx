'use client'

import { fetchAllUsers } from "@/app/components/users/service/user.service";
import { getAllUsers } from "@/app/components/users/service/user.slice";
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
  
      console.log('length is '+ allUsers.length)
      for(let i=0; i< allUsers.length; i++){
          console.log(JSON.stringify(allUsers[i]))
      }
  }else{
      console.log('allUsers is undefined')
  }

    useEffect(()=>{
        dispatch(fetchAllUsers(1))
    },[])


    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          width: 90,
        },
        {
          field: "fullName",
          headerName: "Full name",
          description: "This column has a value getter and is not sortable.",
          sortable: false,
          width: 160,
          valueGetter: (params: { row: { firstName: any; lastName: any; }; }) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
      ];

      const rows = [ 
        { id: 1, username: "Snow", name: "Jon", phone: "35",job : "개발자" },
        { id: 2, username: "Lannister", name: "Cersei", phone: "42" ,job : "백엔드"},
        { id: 3, username: "Lannister", name: "Jaime", phone: "45",job : "프론트"},
        { id: 4, username: "Stark", name: "Arya", phone: "16", job : "트러블 슈터"},
        { id: 5, username: "Targaryen", name: "Daenerys", phone: "123",job : "백수" },
        { id: 6, username: "Melisandre", name: null, phone: "150" ,job : "CEO"},
        { id: 7, username: "Clifford", name: "Ferrara", phone: "44" ,job : "PO"},
        { id: 8, username: "Frances", name: "Rossini", phone: "36",job : "백엔드" },
        { id: 9, username: "Roxie", name: "Harvey", phone: "65",job : "프론트" },
      ];

    
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