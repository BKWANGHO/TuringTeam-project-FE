'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";

const SERVER = 'http://localhost:8080'

export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert('입력완료' + name)
    const url = `${SERVER}/name`
    const data = { name }
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      }
    }
    axios.post(url, data, config)
      .then(res => {
        alert("리스펀스가 가져온이름 : " + JSON.stringify(res.data))
      })
  }

  return (<div className="text-center" >
    <h3 >Welcome react!!</h3><br />
    <h3 className='text-red-500'>이름입력하세요</h3>
    <input className=" rounded-lg  flex-1 appearance-none border
     border-black w-500 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
      focus:ring-purple-600 focus:border-transparent" type="text" onChange={handleChange} />
    <button onClick={handleClick}>완료</button><br />
    <Link href={"/pages/users/login"} >로그인</Link><br />
    <Link href={"/pages/users/join"}>회원가입</Link><br />
    <Link href={"/pages/demos/mui-demo"}>mui-demo</Link>
  </div>)

}