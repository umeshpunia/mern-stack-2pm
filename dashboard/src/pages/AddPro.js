import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../config";

function AddPro() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories,setCategories]=useState([])

  useEffect(()=>{

    getCat()
  },[])

  async function getCat(){
    try {
      let res=await axios.get(`${apiUrl}/category/all`)
      setCategories(res.data.msg)
    } catch (error) {
      console.log(error)
    }
  }

  function choosePic(e) {
    let myFile = e.target.files[0];
    let { type } = myFile;

    let validFiles = ["image/jpeg", "image/jpg", "image/png"];

    if (validFiles.includes(type)) {
      setPicture(myFile);
      alert("valid pic");
    } else {
      setPicture("");
      alert("choose valid file");
    }
  }

  async function addCat(e) {
    e.preventDefault();

    let fData = new FormData();
    fData.append("name", name);
    fData.append("description", description);
    fData.append("picture", picture);
    fData.append("category", category);
    fData.append("price", price);

    try {
      let res = await axios.post(`${apiUrl}/product/add`, fData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Add Product</h1>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form onSubmit={addCat}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type={"text"}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Picture</label>
                <input
                  type={"file"}
                  onChange={choosePic}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Price</label>
                <input
                  type={"text"}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Category</label>
                <select className="form-control" onSelect={e=>setCategory(e.target.value)}>
                    <option selected disabled>Choose Category</option>
                   {
                    categories?.map(cat=> <option key={cat._id} value={cat._id}>{cat.name}</option>)
                   }
                </select>
              </div>
              <div className="mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn-success">Add Product</button>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
}

export default AddPro;
