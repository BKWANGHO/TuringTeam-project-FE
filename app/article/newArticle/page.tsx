'use client'
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const SERVER = 'http://localhost:8080'
interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const Article = (props: IArticle) => {
    return (
        <tr key={props.id}>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
        </tr>
    )
}

export default function newArticle() {
    // const router = useRouter();

    const url = `${SERVER}/api/articles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }

    axios.get(url, config)
        .then(res => {
            const messenge = res.data.messenge
            alert((messenge))

            if (messenge === 'SUCCESS') {
                alert("게시글이 있습니다.");
            } else if (messenge === 'FAIL') {
                alert("게시글이 없습니다.");
            } else {
                alert("지정되지 않은 값");
            }
        })

    const articles = [

        { id: 0, title: 'tit1', content: '', writer: '', registerDate: '' }
    ]
    const articleMap = articles.map((v, i) => (<Article {...v} />))

    return (<>
        <h2>HTML Table</h2>
        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>registerDate</th>
                </tr>
            </thead>
            <tbody>
                {articleMap}
            </tbody>
        </table>
    </>)
}