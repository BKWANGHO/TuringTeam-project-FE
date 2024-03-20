'use client'

import { useState } from "react"


const SERVER = 'http://localhost:8080'
export default function Join(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')



    const handleUsername = (e:any)=>{
        setUsername(e.target.value)
    }
    
    const handlePassword = (e:any)=>{
        setPassword(e.target.value)
    }
    
    const handleName = (e:any)=>{
        setName(e.target.value)
    }
    
    const handleSubmit = ()=>{
        alert('입력완료')
        

    }





    return(<>
    <h1>회원가입합시다.</h1>
    
    <h3>아이디 입력</h3>
    <input type="text" onChange={handleUsername} />
    <h3>비밀번호 입력</h3>
    <input type="text" onChange={handlePassword} />
    <h3>이름 입력</h3>
    <input type="text" onChange={handleName} /><br />
    <button onClick={handleSubmit}>확인</button>
    
    </>)
}