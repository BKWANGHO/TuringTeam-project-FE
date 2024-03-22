'use client'

import { useState } from "react"


const SERVER = 'http://localhost:8080'
export default function Join(){

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
}