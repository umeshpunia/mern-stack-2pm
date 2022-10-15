import React from "react";

function Cart() {

    function remove(){
        alert("removed")
    }
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5">My Cart</h1>
        <table class="table">
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
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>&#8377;100</td>
              <td>
                <span style={{fontWeight:'bold'}} onClick={remove}>x</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
                <th colSpan={4} className="text-center">Cart Total</th>
                <th>&#8377;100</th>
            </tr>
          </tfoot>
        </table>
        <div className="text-right">
        <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
