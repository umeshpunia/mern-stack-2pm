import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mediaUrl } from "../config";
import { removeFromCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const myCart = useSelector((s) => s.cart);
  const email = localStorage.getItem("login_email");

  let cartTotal = 0;

  function checkoutCart() {
    const options = {
      key: "rzp_test_BHuueAoUi9GpMq",

      amount: cartTotal * 100, // amount should be in paise format i am using here 10 Rupees

      currency: "INR",

      name: "My Ecom", // company name or product name

      description: "hello", // product description

      image: "", // company logo or product image

      modal: {
        // We should prevent closing of the form when esc key is pressed.

        escape: false,
      },

      notes: {
        // include notes if any
      },

      theme: {
        color: "#0c238a",
      },
    };

    options.handler = (response, error) => {
      options.response = response;
      

      if (response) {
        // api orders
        
      }

      console.log(response); // do whatever you want to do after response

      console.log(options);

      // call your backend api to verify payment signature & capture transaction
    };

    options.modal.ondismiss = () => {
      // handle the case when user closes the form while transaction is in progress

      console.log("Transaction cancelled.");
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
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
            {myCart?.map((pro) => (
              <tr key={pro?._id}>
                {(cartTotal = cartTotal + parseFloat(pro.price))}
                <th>1</th>
                <td>{pro?.name}</td>
                <td>
                  <img
                    width={50}
                    src={`${mediaUrl}/products/${pro?.picture}`}
                  />
                </td>
                <td>&#8377;{pro?.price}</td>
                <td>
                  <span
                    style={{ fontWeight: "bold" }}
                    onClick={() => dispatch(removeFromCart(pro))}
                  >
                    x
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={4} className="text-center">
                Cart Total
              </th>
              <th>&#8377;{cartTotal}</th>
            </tr>
          </tfoot>
        </table>
        <div className="text-right">
          {!email ? (
            <Link to="/">Login</Link>
          ) : (
            <button className="btn btn-primary" onClick={checkoutCart}>Checkout</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
// rzp_test_BHuueAoUi9GpMq
