import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {apiUrl} from '../config'

function Profile() {
  const [op, setOp] = useState("");
  const [np, setNp] = useState("");
  const [cp, setCp] = useState("");
  const [msg, setMsg] = useState("");
  const navigate=useNavigate()

  let myEmail = localStorage.getItem("admin_email");

  async function updPass(e) {
    e.preventDefault();

    if(op===np){
        setMsg("Please Enter Different New Password")
    }else if(np!==cp){

        setMsg("Please Match New And Confirm Password")
    }else{

      try{
        let res=await axios.post(`${apiUrl}/user/change-password`,{op,np,email:myEmail})
        setMsg("")
        alert("Updated")
        localStorage.removeItem("admin_email")
        navigate("/")
      }catch(err){
        setMsg("Something Wrong Please Try Again")
      }

        
    }

  }

  return (
    <>
      <div className="container my-5">
        <h1 className="my-5">My Profile</h1>
        <div className="row">
          <div className="col-sm-6">
            <h2>Welcome {myEmail}</h2>
          </div>
          <div className="col-sm-6">
            <h2>Change Password</h2>
            <div className="row my-4">
              <div className="col-sm-8">
                <form onSubmit={updPass}>
                  <div className="mb-3">
                    <label>Old Password</label>
                    <input
                      className="form-control"
                      onChange={(e) => setOp(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label>New Password</label>
                    <input
                      className="form-control"
                      onChange={(e) => setNp(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Confirm Password</label>
                    <input
                      onChange={(e) => setCp(e.target.value)}
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <h3 className="text-danger">{msg}</h3>
                  <button type="submit" className="btn btn-info">
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
