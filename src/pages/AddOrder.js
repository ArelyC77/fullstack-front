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
         <div class="row">
         <div className='mb-3' class="col">
            <label htmlFor='Department' className='form-label'>Department</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter department name...'
            name="department"
            value={department}
            onChange={(e)=>onInputChange(e)} //called the onInputChange event with arrow function
            />
          </div> 

          {/* dateRequestReceived margin bottom 3 */}
          <div className='mb-3' class="col">
            <label htmlFor='dateRequestReceived' className='form-label'>Date Request Received</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the date...'
            name="dateRequestReceived"
            value={dateRequestReceived}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div> {/*end of row*/}

          {/* shoppingCartNo margin bottom 3 */}
          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='shoppingCartNo' className='form-label'>Shopping Cart #</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the shopping cart #...'
            name="shoppingCartNo"
            value={shoppingCartNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
          <br/>
            <label htmlFor='poNo' className='form-label'>P.O. #</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the purchase order #...'
            name="poNo"
            value={poNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='datePOCreated' className='form-label'>Date P.O Created</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the date...'
            name="datePOCreated"
            value={datePOCreated}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='vendorNo' className='form-label'>Vendor #</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the vendor #...'
            name="vendorNo"
            value={vendorNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='vendorName' className='form-label'>Vendor Name</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the vendor name...'
            name="vendorName"
            value={vendorName}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='requestorName' className='form-label'>Requestor Name</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the requestor name...'
            name="requestorName"
            value={requestorName}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div> {/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='shipTo' className='form-label'>Ship To</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter location to ship to...'
            name="shipTo"
            value={shipTo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='input-group mb-3 ' class="col">
            <br/>
            <label htmlFor='description' className='form-label'>Description</label>
            <text-area
            type={"text"}
            class='form-control'
            placeholder='Enter the description...'
            name="description"
            value={description}
            onChange={(e)=>onInputChange(e)}
            ></text-area>
          </div>

          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='amount' className='form-label'>Amount </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the amount...'
            name="amount"
            value={amount}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='fundNo' className='form-label'>Fund # </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the fund #...'
            name="fundNo"
            value={fundNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='objectNo' className='form-label'>Object # </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the object #...'
            name="objectNo"
            value={objectNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'class="col">
            <br/>
            <label htmlFor='locationNo' className='form-label'>Location # </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the location #...'
            name="locationNo"
            value={locationNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='programNo' className='form-label'>Program # </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the program #...'
            name="programNo"
            value={programNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='functionNo' className='form-label'>Function # </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the function #...'
            name="functionNo"
            value={functionNo}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='sapOrCreditCard' className='form-label'>SAP or Credit Card </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter SAP or Credit Card...'
            name="sapOrCreditCard"
            value={sapOrCreditCard}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='dateApproved' className='form-label'>Date Approved</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the date approved...'
            name="dateApproved"
            value={dateApproved}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='dateGottardiApproved' className='form-label'>Date Approved by Gottardi</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the date Gottardi approved...'
            name="dateGottardiApproved"
            value={dateGottardiApproved}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='processorName' className='form-label'>Processor Name</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the processor name ...'
            name="processorName"
            value={processorName}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}

          <div class="row">
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='statusGoodReceipts' className='form-label'>Status of Goods Receipt</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the status of goods receipt...'
            name="statusGoodReceipts"
            value={statusGoodReceipts}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3' class="col">
            <br/>
            <label htmlFor='invoiceStatus' className='form-label'>Invoice Status</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter the status of invoice status...'
            name="invoiceStatus"
            value={invoiceStatus}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          </div>{/*end of row*/}
          <br/> <br/>
          <button type="submit" className='btn btn-outline-primary'>Submit</button>
          <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
        </form>
      </div>
    </div>
  </div>
  );
}
