import { Typography } from "@mui/material";




export const MyTypography = (data:any,size:string)=> 
 <Typography textAlign="center" sx={{ fontSize:size}}>  {data}</Typography>
export const MyTypographyLeft = (data:any,size:string)=> 
 <Typography textAlign="left" sx={{ fontSize:size}}>  {data}</Typography>