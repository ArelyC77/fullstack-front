import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import { Link, useParams } from 'react-router-dom';

// Import Bootstrap Icons CSS directly
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const { id } = useParams();

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

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/user/${id}`);
            loadUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleDeleteClick = (id) => {
        setUserToDelete(id);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        if (userToDelete) {
            deleteUser(userToDelete);
            setShowModal(false);
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setUserToDelete(null);
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
                                    {/* View */}
                                    <button className='btn btn-primary mx-2'>
                                        <i class="bi bi-eye"></i>
                                    </button>

                                    {/* Links take users to a new section while buttons trigger an action */}
                                    {/* Edit */}
                                    <Link className='btn btn-outline-primary mx-2'
                                        to={`/edituser/${user.id}`}>
                                        <i className="bi bi-pencil"></i>
                                    </Link>

                                    {/* Delete */}
                                    <button className='btn btn-danger mx-2'
                                        onClick={() => handleDeleteClick(user.id)}>
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Confirmation Modal */}
            {showModal && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Confirmation</h5>
                                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this user?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}
