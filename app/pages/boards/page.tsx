
'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';


const SERVER = 'http://localhost:8080'

interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}


export default function Articles() {

    const [articles, setArticles] = useState([])

    const url = `${SERVER}/api/articles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }

    useEffect(() => {
        axios.get(url, config)
            .then(res => {
                const messege = res.data.messege
                if (messege === 'SUCCESS') {
                    console.log("게시글이 있습니다.")
                    const arr = res.data.result
                    for (let i of arr) {
                        console.log(i)
                        setArticles(res.data.result)
                    }

                } else if (messege === 'FAIL') {
                    console.log("게시글이 없습니다.")
                } else {
                    console.log("지정되지 않은 값")
                }
            })
    }, [])
    return (<>
        <h3>게시글 목록</h3>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
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
        </Box>
    </>
    )
}