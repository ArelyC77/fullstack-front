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

    //updates the dom and is called everytime any state
    //of the dependency array is modifiedor updated
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
                        <ul className='list-group list-group-flush' align="left">
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
                            <li className="list-group-item">
                                <b>P.O #: </b>
                                {order.poNo}
                            </li>
                            <li className="list-group-item">
                                <b>Vendor Name: </b>
                                {order.vendorName}
                            </li>
                            <li className='list-group-item'>
                                <b>Requestor Name: </b>
                                {order.requestorName}
                            </li>
                            <li className='list-group-item'>
                                <b>Description: </b>
                                {order.description}
                            </li>
                            <li className='list-group-item'>
                                <b>Amount: </b>
                                {order.amount}
                            </li>
                            <li className='list-group-item'>
                                <b>Fund #: </b>
                                {order.fundNo}
                            </li>
                            <li className='list-group-item'>
                                <b>Date P.O. Created: </b>
                                {order.datePOCreated}
                            </li>
                            <li className='list-group-item'>
                                <b>Vendor #: </b>
                                {order.vendorNo}
                            </li>
                         <li className='list-group-item'>
                            <b>Ship To: </b>
                            {order.shipTo}
                         </li>
                         <li className='list-group-item'>
                            <b>Object #: </b>
                            {order.objectNo}
                         </li>
                         <li className='list-group-item'>
                            <b>Location #: </b>
                            {order.locationNo}
                         </li>
                         <li className="list-group-item">
                            <b>Program #: </b>
                            {order.programNo}
                         </li>
                         <li className='list-group-item'>
                            <b>Function #: </b>
                            {order.functionNo}
                         </li>
                        <li className='list-group-item'>
                            <b>Sap or Credit Card: </b>
                            {order.sapOrCreditCard}
                        </li>
                        <li className='list-group-item'>
                            <b>Date Approved: </b>
                            {order.dateApproved}
                        </li>
                        <li className='list-group-item'>
                            <b>Date Gottardi Approved: </b>
                            {order.dateGottardiApproved}
                        </li>
                        <li className='list-group-item' >
                            <b>Processor Name: </b>
                            {order.processorName}
                        </li>
                        <li className='list-group-item'>
                            <b>Status of Good Receipts: </b>
                            {order.statusGoodReceipts}
                        </li>
                        <li className='list-group-item'>
                            <b>Invoice Status: </b>
                            {order.invoiceStatus}
                        </li>
                        </ul>
                    </div>
                    <br/>
                    <Link className='btn btn-primary my-2' to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
