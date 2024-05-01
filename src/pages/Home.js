import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import './scrollToTopButton.css';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap Icons CSS directly
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
    //useState lets
    const [orders, setOrders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [search, setSearch] = useState('');

    const { id } = useParams();

    const onInputChange=(e)=>{
        setSearch(e.target.value)
      };

      // => is an updater function
    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            const result = await axios.get("http://localhost:8080/orders");
            setOrders(result.data);
        } catch (error) {
            console.error("Error loading orders:", error);
        }
    };

    const deleteOrder = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/orders/${id}`);
            loadOrders();
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    const handleDeleteClick = (id) => {
        setOrderToDelete(id);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        if (orderToDelete) {
            deleteOrder(orderToDelete);
            setShowModal(false);
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setOrderToDelete(null);
    };

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        let mybutton = document.getElementById("btn-back-to-top");
        const scrollFunction = () => {
            if (mybutton) {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
        };
    
        const backToTop = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    
        if (mybutton) {
            window.addEventListener("scroll", scrollFunction);
            mybutton.addEventListener("click", backToTop);
        }
    
        // Clean up event listeners when the component is unmounted
        return () => {
            window.removeEventListener("scroll", scrollFunction);
            if (mybutton) {
                mybutton.removeEventListener("click", backToTop);
            }
        };
    }, []);
   
    return (
        <div className='container'>
            <div className='py-4'>
            <input
                type={"text"}
                className='form-control'
                placeholder='Search table...'
                name="search"
                onChange={(e)=>onInputChange(e)} //called the onInputChange event with arrow function
            />
            <br/>
            
                <table className="table table-hover table-bordered table-striped shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date Request Received</th>
                            <th scope="col">Department</th>
                            <th scope="col">Shopping Cart # </th>
                            <th scope='col'>P.O. #</th>
                            <th scope='col'>Vendor</th>
                            <th scope="col">Requestor</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Fund #</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* SEARCH MECHANISMS */}
            {orders.filter(index => {
            const searchLowerCase = search.toLowerCase();
            return (
                index.department.toLowerCase().includes(searchLowerCase) ||
                String(index.dateRequestReceived).includes(searchLowerCase) ||
                String(index.shoppingCartNo).includes(searchLowerCase) ||
                String(index.poNo).includes(searchLowerCase) ||
                index.vendorName.toLowerCase().includes(searchLowerCase) ||
                index.requestorName.toLowerCase().includes(searchLowerCase) ||
                index.description.toLowerCase().includes(searchLowerCase) ||
                String(index.amount).includes(searchLowerCase) ||
                String(index.fundNo).includes(searchLowerCase) ||
                String(index.datePOCreated).includes(searchLowerCase) ||
                String(index.vendorNo).includes(searchLowerCase) ||
                index.shipTo.toLowerCase().includes(searchLowerCase) ||
                String(index.objectNo).includes(searchLowerCase) ||
                String(index.locationNo).includes(searchLowerCase) ||
                String(index.programNo).includes(searchLowerCase) ||
                String(index.functionNo).includes(searchLowerCase) ||
                index.sapOrCreditCard.toLowerCase().includes(searchLowerCase) ||
                String(index.dateApproved).includes(searchLowerCase) ||
                String(index.dateGottardiApproved).includes(searchLowerCase) ||
                index.processorName.toLowerCase().includes(searchLowerCase) ||
                index.statusGoodReceipts.toLowerCase().includes(searchLowerCase) ||
                index.invoiceStatus.toLowerCase().includes(searchLowerCase)
            );}).map((order, index) => (
                
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.dateRequestReceived}</td>
                                <td>{order.department}</td>
                                <td>{order.shoppingCartNo}</td>
                                <td>{order.poNo}</td>
                                <td>{order.vendorName}</td>
                                <td>{order.requestorName}</td>
                                <td>{order.description}</td>
                                <td>{order.amount}</td>
                                <td>{order.fundNo}</td>
                                <td>
                                    {/* View */}
                                    <Link className='btn btn-primary mx-2'
                                        to={`/vieworder/${order.id}`}>   
                                        <i className="bi bi-eye"></i>
                                    </Link>

                                    {/* Links take orders to a new section while buttons trigger an action */}
                                    {/* Edit */}
                                    <Link className='btn btn-outline-primary mx-2'
                                        to={`/editorder/${order.id}`}>
                                        <i className="bi bi-pencil"></i>
                                    </Link>

                                    {/* Delete */}
                                    <button className='btn btn-danger mx-2'
                                        onClick={() => handleDeleteClick(order.id)}>
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
                                <p>Are you sure you want to delete this order?</p>
                            </div>
                            <div className="modal-footer">
                            <div style={{ position: 'absolute', bottom: '8', left: '0', right:'80%'}}>
                                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Cancel</button>
                                </div>
                                <div className="ml-auto">
                                    <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop fade show"></div>}

            <button
            type="button"
            className="btn btn-primary btn-floating btn-sm"
            id="btn-back-to-top"
            onClick={backToTop}
            >
            <i class="bi bi-arrow-up"></i>
            </button>
            
        </div>
        
    );
}
