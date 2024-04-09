import { Typography } from '@mui/material'
import { rowSelectionStateInitializer } from '@mui/x-data-grid/internals'
import { IArticle } from '../model/article'
import { GridColDef } from '@mui/x-data-grid'


interface CellType{
    row : IArticle 
}



export default function articlesColums(): GridColDef[] {

    return [
        {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'id',
        headerName: 'ID',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.id}</Typography>
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'title',
        headerName: '제목',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.title}</Typography>
            
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'content',
        headerName: '내용',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.content}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'writer',
        headerName: '작성자',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.writer}</Typography>
        
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'board',
        headerName: '게시판',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.board}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'regDate',
        headerName: '생성일',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.regDate}</Typography>
    },
    {
        flex: 0.04,
        minWidth: 30,
        sortable: false,
        field: 'modDate',
        headerName: '수정일',
        renderCell : ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.modDate}</Typography>
    }



]

}