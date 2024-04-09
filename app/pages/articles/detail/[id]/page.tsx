'use client'

import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { MyTypography } from '@/app/components/common/style/cell';


const boardsDetailPage: NextPage = (props: any) => {
  const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(findArticleById(props.params.id))
  // }, [])

  return (<>
    <h1>게시글 상세페이지</h1>
    <span>ID : {MyTypography(props.params.id,"1.2rem")}</span>   
    {/* <span>게시판이름 : {MyTypography()}</span>    */}
    {/* <span>게시판타입 : {MyTypography()}</span>   
    <span>등록일 : {MyTypography()}</span>   
    <span>수정일 : {MyTypography()}</span>    */}




  </>)
}
export default boardsDetailPage;