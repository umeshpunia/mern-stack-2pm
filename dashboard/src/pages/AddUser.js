import React, { useState } from "react";

import axios from "axios";
import { apiUrl } from "../config";

function AddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [msg, setMsg] = useState("");

  async function addUser(e) {
    e.preventDefault();

    let fData = new FormData();

    fData.append("email", email);
    fData.append("password", password);
    fData.append("picture", picture);

    try {
      let res = await axios.post(`${apiUrl}/user/register`, fData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function choosePic(e) {
    // console.log(e);
    let myFile = e.target.files[0];
    let { type } = myFile;

    let validFiles = ["image/jpg", "image/jpeg", "image/png"];
    if (validFiles.includes(type)) {
      setPicture(myFile);
      setMsg("");
    } else {
      setMsg("Please Choose Valid File");
      setPicture("");
    }
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="my-5">Add User</h1>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="row my-4">
              <div className="col-sm-8">
                <form onSubmit={addUser}>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Profile Pic</label>
                    <input
                      onChange={choosePic}
                      className="form-control"
                      type="file"
                    />
                  </div>
                  <h3 className="text-danger">{msg}</h3>
                  <button type="submit" className="btn btn-info">
                    Add User
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
