import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    //tells react that your component has to do smth after
    //the render
    const [users, setUsers]=useState([])
    //this lures the user's information everytime the page loads
    useEffect(()=> {
        loadUsers();
    },[]);
    //axios handles information from JSON in backend
    const loadUsers=async ()=> {
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data) //this prints to the table
        //console.log(result.data) this prints to the console
    };


    return (
        <div className='container'>
            {/* py-4 is for padding */}
            <div className='py-4'>
                <table className="table table-bordered shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* This is for dynamic data in table */}
                        {
                            users.map((user,index)=>(
                                <tr>
                                {/* increases the index by 1 */}
                                <th scope="row" key={index}>
                                    {index + 1}
                                </th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}
