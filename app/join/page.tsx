'use client'

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const SERVER = 'http://localhost:8080'
export default function Join() {

<<<<<<< HEAD
    const [memId,setMemId] = useState('')
    const [memPw,setMemPw] = useState('')
    const [name,setName] = useState('')

    const handleMemId = (e:any)=>{
      setMemId(e.target.value)
    }
    
    const handleMemPw = (e:any)=>{
      setMemPw(e.target.value)
    }
    
    const handleName = (e:any)=>{
        setName(e.target.value)
    }
    
    const handleSubmit = ()=>{
        alert('입력완료')
    }
    const handleCancel = ()=>{
      alert('cancel')
    }
=======
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [addressId, setAddressId] = useState('')
  const [job, setJob] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const handleUsername = (e: any) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const handleName = (e: any) => {
    setName(e.target.value)
  }
  const handlePhone = (e: any) => {
    setPhone(e.target.value)
  }
  const handleAddressId = (e: any) => {
    setAddressId(e.target.value)
  }
  const handleJob = (e: any) => {
    setJob(e.target.value)
  }
  const handleHeight = (e: any) => {
    setHeight(e.target.value)
  }
  const handleWeight = (e: any) => {
    setWeight(e.target.value)
  }

  const router = useRouter();

  const handleSubmit = () => {
    const url = `${SERVER}/api/users`
    const data = { username, password,name,phone,addressId,job,height,weight}
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
    axios.post(url, data, config)
        .then(res => { alert(JSON.stringify(res.data)) 
        router.push("/login")
        })
}

  return (<>
>>>>>>> origin/main

    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label htmlFor="username"><b>Username</b></label><br />
      <input type="text" placeholder="Enter Username" name="username" onChange={handleUsername} required /><br /><br />

<<<<<<< HEAD
    return(<>
    <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>   <br />

    <label htmlFor="memId"><b>ID</b></label><br />
    <input type="text" placeholder="Enter ID" name="id" required/>
    <br /><br />
    <label htmlFor="memPw"><b>Password</b></label><br />
    <input type="password" placeholder="Enter Password" name="memPw" required/>
    <br /><br />
    <label htmlFor="pmemPwRe"><b>Confirm Password</b></label><br />
    <input type="password" placeholder="Enter Confirm Password" name="pmemPwRe" required/>
    <br /><br />
    <label htmlFor="name"><b>NAME</b></label><br />
    <input type="text" placeholder="Enter name" name="name" required/>
    <br /><br />
    <label htmlFor="phone"><b>phone</b></label><br />
    <input type="text" placeholder="Enter phone" name="phone" required/>
    <br /><br />
    <label htmlFor="address"><b>address</b></label><br />
    <input type="text" placeholder="Enter address" name="address" required/>
    <br /><br />
    <label htmlFor="job"><b>job</b></label><br />
    <input type="text" placeholder="Enter job" name="job" required/>
    <br /><br />
    <label htmlFor="height"><b>height</b></label><br />
    <input type="text" placeholder="Enter height" name="height" required/>
    <br /><br />
    <label htmlFor="weight"><b>weight</b></label><br />
    <input type="text" placeholder="Enter weight" name="weight" required/>
    <br /><br />
    
    <label>
      <input type="checkbox" checked={true} name="remember" style={{marginBottom:'15px'}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>
    <br />
    <div className="clearfix">
      <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button><br />
      <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
    </div>
  </div>
    </>)
=======
      <label htmlFor="password"><b>Password</b></label><br />
      <input type="password" placeholder="Enter Password" name="password" onChange={handlePassword} required /><br /><br />

      <label htmlFor="name"><b>Name</b></label><br />
      <input type="text" placeholder="Enter name" name="name" onChange={handleName} required /><br /><br />

      <label htmlFor="phone"><b>PhoneNumber</b></label><br />
      <input type="text" placeholder="Enter phoneNumber" name="phone" onChange={handlePhone} required /><br /><br />

      <label htmlFor="addressId"><b>Address</b></label><br />
      <input type="text" placeholder="Enter address" name="addressId" onChange={handleAddressId} required /><br /><br />

      <label htmlFor="job"><b>Job</b></label><br />
      <input type="text" placeholder="Enter job" name="job" onChange={handleJob} required /><br /><br />

      <label htmlFor="height"><b>Height</b></label><br />
      <input type="text" placeholder="Enter height" name="height" onChange={handleHeight} required /><br /><br />

      <label htmlFor="weight"><b>Weight</b></label><br />
      <input type="text" placeholder="Enter weight" name="weight" onChange={handleWeight} required /><br /><br />

      <label>
        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
      </label><br />

      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>

  </>)
>>>>>>> origin/main
}