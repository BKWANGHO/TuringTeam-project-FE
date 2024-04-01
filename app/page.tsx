'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { PG } from "../redux/common/enums/PG";
import AxiosConfig from "../redux/common/configs/axios-config";
import { API } from "../redux/common/enums/API";



export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert('입력완료' + name)
  
    axios.post(`${API.SERVER}/login`, { name }, AxiosConfig())
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
    <Link href={ `${PG.USER}/login`} >로그인</Link><br />
    <Link href={`${PG.USER}/join`}>회원가입</Link><br />
    <Link href={`${PG.USER}/users`}>유저 목록</Link><br />
    <Link href={`${PG.DEMO}/mui-demo`}>mui-demo</Link><br />
    <Link href={`${PG.BOARD}/articles/writer`}>article</Link><br />
    <Link href={`${PG.DEMO}/companies`}>companies</Link><br />  
    <Link href={`${PG.DEMO}/counter`}>conuter</Link><br />
    <Link href={`${PG.DEMO}/redux-counter`}>Redux counter-demo</Link>
  </div>)

}