import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddOrder() {

  //react router dom useNavigate
  let navigate = useNavigate()

  const [order, setOrder]=useState({
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
  })

  //deconstruct useState
  const{
    department,
    dateRequestReceived,
    shoppingCartNo,
    poNo,
    vendorName,
    requestorName,
    description,
    amount,
    fundNo,
    datePOCreated,
    vendorNo,
    shipTo,
    objectNo,
    locationNo,
    programNo,
    functionNo,
    sapOrCreditCard,
    dateApproved,
    dateGottardiApproved,
    processorName,
    statusGoodReceipts,
    invoiceStatus
    }=order

  //event change (refer to input variables)
  const onInputChange=(e)=>{
    //the split operator"..." will keep on adding the new object
    setOrder({...order,[e.target.name]: e.target.value})
  };

  const onSubmit= async (e)=>{
    e.preventDefault();
    //axios will post the information using backend post
    await axios.post("http://localhost:8080/orders",order)
    //this will navigate to the homepage when submitted
    navigate("/")
  };
  

  return (
  <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Register Order</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
          {/* DEPARTMENT margin bottom 3 */}
          <div className='mb-3'>
            <label htmlFor='Department' className='form-label'>Department</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your department...'
            name="department"
            value={department}
            onChange={(e)=>onInputChange(e)} //called the onInputChange event with arrow function
            />
          </div> 

          {/* DATEREQUESTRECEIVED margin bottom 3 */}
          <div className='mb-3'>
            <label htmlFor='DateRequestReceived' className='form-label'>Date Request Received</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the date request was received'
            name="dateRequestReceived"
            value={dateRequestReceived}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          {/* shoppingCartNo margin bottom 3 */}
          <div className='mb-3'>
            <label htmlFor='shoppingCartNo' className='form-label'>Shopping Cart #</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your shoppingCartNo'
            name="shoppingCartNo"
            value={shoppingCartNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <button type="submit" className='btn btn-outline-primary'>Submit</button>
          <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
        </form>
      </div>
    </div>
  </div>
  );
}
