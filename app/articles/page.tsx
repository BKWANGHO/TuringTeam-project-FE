
'use client'

import axios from "axios"
import { Main } from "next/document"
import { useRouter } from "next/navigation"
import { stringify } from "querystring"
import { useState } from "react"


const SERVER = 'http://localhost:8080'

interface IArticle{
    id : number,
    title : string,
    content: string,
    writer: string,
    registerDate: string

}

const Article = (props: IArticle) => {
    return (
        <tr key = {props.id}> 
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
        </tr>
    );
};

export default function Articles() {
    const url = `${SERVER}/articles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }

    axios.get(url,config)
    .then(res => {
        const messege = res.data.로그인성공여부
                alert(messege)
                if(messege === 'SUCCESS'){
                    alert("게시글이 있습니다.")
                 }else if (messege === 'FAIL'){
                    alert("게시글이 없습니다.")
                 }else{
                    alert("지정되지 않은 값")
                 }
    })

    const articles = [
        {id : 1 ,title : '자바',content: '자바는 쉽지',writer :'배광호',registerDate :'오늘' },
        {id : 2 ,title : '리엑트',content: '리엑트는 어렵지',writer :'배광호',registerDate :'오늘' }
       
    ]
    
    const artilceMap = articles.map((v) => (<Article {...v} />))    
    

    return (
        <>
            <h3>Articles</h3>

            <table border={1}>
                <thead>
                <tr>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>등록일</th>
                </tr>
                </thead>
                <tbody>
                {artilceMap}
                </tbody>
            </table>
        </>

    )
}