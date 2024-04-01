'use client'

import { IUser } from "@/redux/features/users/user.model";
import { fetchAllUsers } from "@/redux/features/users/user.service";
import { getAllUsers } from "@/redux/features/users/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsersPage : NextPage = ()=>{
    const dispatch = useDispatch()
    const allUsers : [] = useSelector(getAllUsers)

    useEffect(()=>{
        dispatch(fetchAllUsers(1))
    },[])

return(<>
<h2>USER LIST</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>직업</th>
                    <th>키</th>
                    <th>몸무게</th>
                </tr>
            </thead>
            <tbody>
                {allUsers?.map((props: IUser) => (
                    <tr key={props.id}>
                        <td>{props.username}</td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.addressId}</td>
                        <td>{props.job}</td>
                        <td>{props.height}</td>
                        <td>{props.weight}</td>
                    </tr> 
                 ))}
            </tbody>
        </table>

</>)

}
export default UsersPage;