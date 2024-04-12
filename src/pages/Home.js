import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

// Import Bootstrap Icons CSS directly
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/users");
            setUsers(result.data);
        } catch (error) {
            console.error("Error loading users:", error);
        }
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table table-hover table-bordered table-striped shadow">
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
                        {users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>
                                        <i class="bi bi-eye"></i> View
                                    </button>

                                    <button className='btn btn-outline-primary mx-2'>
                                        <i className="bi bi-pencil"></i> Edit
                                    </button>

                                    <button className='btn btn-danger mx-2'>
                                        <i class="bi bi-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
