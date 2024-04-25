import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewOrder() {
    const [order, setOrder] = useState({
        department:"",
    dateRequestReceived:"",
    shoppingCartNo:"",
    poNo:"",//main table int
    vendorName:"", //main table
    requestorName:"", //main table
    description:"", //main table
    amount:"", //main table double
    fundNo:"",//main table integer
    //-----------------------------------------------------------
    datePOCreated:"",
    vendorNo:"",//integer
    shipTo:"",//integer
    objectNo:"",//integer
    locationNo:"",//integer
    programNo:"",//int
    functionNo:"",//int
    sapOrCreditCard:"",
    dateApproved:"",
   dateGottardiApproved:"",
    processorName:"",
    statusGoodReceipts:"",
    invoiceStatus:""
    });

    const { id } = useParams();

    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/orders/${id}`);
            setOrder(result.data);
        } catch (error) {
            console.error("Error loading order:", error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Order Details</h2>
                    <div className='card'>
                        <div className="card-header">
                            Details of order id : {id}
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className="list-group-item">
                                <b>Department: </b>
                                {order.department}
                            </li>
                            <li className="list-group-item">
                                <b>Date Request Received: </b>
                                {order.dateRequestReceived}
                            </li>
                            <li className="list-group-item">
                                <b>Shopping Cart #: </b>
                                {order.shoppingCartNo}
                            </li>
                        </ul>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
