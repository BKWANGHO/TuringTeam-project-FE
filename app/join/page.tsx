'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"


const SERVER = 'http://localhost:8080'
export default function Join() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
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
    const handlePhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value)
    }

    const handleAddress = (e: any) => {
        setAddress(e.target.value)
    }

    const handlejob = (e: any) => {
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
        alert('회원가입 완료')
        const url = `${SERVER}/api/users`
        const data = { username, password, name, phoneNumber, address, job, height, weight}
        const config = {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Authorization: `Bearer blah ~`,
                "Access-Control-Allow-Origin": "*",
            }
        }

        axios.post(url, data, config)
            .then(res => { alert(JSON.stringify(res.data)) })
            router.push("/login")

    }






    return (<>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label htmlFor="username"><b>ID</b></label>
            <input type="text" onChange={handleUsername} placeholder="Enter Id" name="username" required />
            <br />
            <label htmlFor="password"><b>Password</b></label>
            <input type="text" onChange={handlePassword} placeholder="Enter Password" name="password" required />
            <br />
            <label htmlFor="name"><b>name</b></label>
            <input type="text" onChange={handleName} placeholder="Enter name" name="name" required />
            <br />
            <label htmlFor="phoneNumber"><b>phoneNumber</b></label>
            <input type="text" onChange={handlePhoneNumber} placeholder="Enter phoneNumber" name="phoneNumber" required />
            <br />
            <label htmlFor="address"><b>address</b></label>
            <input type="text" onChange={handleAddress} placeholder="Enter address" name="address" required />
            <br />
            <label htmlFor="job"><b>job</b></label>
            <input type="text" onChange={handlejob} placeholder="Enter job" name="job" required />
            <br />
            <label htmlFor="height"><b>height</b></label>
            <input type="text" onChange={handleHeight} placeholder="Enter height" name="height" required />
            <br />
            <label htmlFor="weight"><b>weight</b></label>
            <input type="text" onChange={handleWeight} placeholder="Enter weight" name="weight" required />
            <br />
            <label>
                <input type="checkbox" checked={true} name="remember" style={{ marginBottom: "15px" }} /> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" onClick={handleSubmit} className="signupbtn">Sign Up</button>
            </div>
        </div>

    </>)
}