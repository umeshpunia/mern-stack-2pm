import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mediaUrl } from "../config";
import { removeFromCart } from "../store/cartSlice";
import {Link} from 'react-router-dom'

function Cart() {
const dispatch=useDispatch()
const myCart=useSelector(s=>s.cart)
const email=localStorage.getItem("login_email")


let cartTotal=0

    function remove(){
        alert("removed")
    }
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5">My Cart</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Picture</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
 {
  myCart?.map(pro=>(
    
    <tr key={pro?._id}>
    {
      cartTotal=cartTotal+parseFloat(pro.price)
    }
    <th>1</th>
    <td>{pro?.name}</td>
    <td>
      <img width={50} src={`${mediaUrl}/products/${pro?.picture}`} />
    </td>
    <td>&#8377;{pro?.price}</td>
    <td>
      <span style={{fontWeight:'bold'}} onClick={()=>dispatch(removeFromCart(pro))}>x</span>
    </td>
  </tr>
  ))
 }
          </tbody>
          <tfoot>
            <tr>
                <th colSpan={4} className="text-center">Cart Total</th>
                <th>&#8377;{cartTotal}</th>
            </tr>
          </tfoot>
        </table>
        <div className="text-right">
      {
        
        !email?<Link to="/">Login</Link>:<button className="btn btn-primary">Checkout</button>
      }

        </div>
      </div>
    </>
  );
}

export default Cart;
