import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_email")) {
      navigate("/dashboard");
    }
  }, []);

  async function loginUser(e) {
    e.preventDefault();

    if (!email || !password) {
      setErrMsg("Please Fill Value");
    } else {
      try {
        let res = await axios.post(`${apiUrl}/user/login`, { email, password });
        setErrMsg("");
        localStorage.setItem("admin_email", email);
        navigate("/dashboard");
      } catch (err) {
        setErrMsg(err.message);
      }
    }
  }

  return (
    <>
      <div className="mb-4 p-5 text-center bg-gr text-white ">
        <h1>Welcome</h1>
        <p>Admin Panel</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form onSubmit={loginUser}>
              <div className="mb-3 mt-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <h3>{errMsg}</h3>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
