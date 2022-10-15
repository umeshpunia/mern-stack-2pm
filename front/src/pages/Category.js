import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

import {apiUrl,mediaUrl} from '../config'

function Category() {

    const [category,setCategory]=useState(null)
    const [products,setProducts]=useState([])
    const {id}=useParams()

    useEffect(()=>{

        getCat()

    },[])



    async function getCat(){
        try {
            let res=await axios.get(`${apiUrl}/category/${id}`)
            if(res){
              setCategory(res.data.msg)
              let proRes=await axios.get(`${apiUrl}/products/${id}`)
              setProducts(proRes.data.msg)


            }
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <>
    {/* single category */}
      <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src={`${mediaUrl}/categories/${category?.picture}`} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <hr />
                  <h2>{category?.name}</h2>
                </div>
                <p>
                    {category?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* all products related to this category */}
      <section className="fruit_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <hr />
            <h2>Products</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
          {
        products?.length == 0 ? <h3>No Products</h3>:(
          products?.map((pro) => (
              <div className="box" key={pro._id}>
                <img src={`${mediaUrl}/products/${pro.picture}`} alt="" />
                <div className="link_box">
                  <h5>{pro.name}</h5>
                  <Link to={`/product/${pro._id}`}>View Now </Link>
                </div>
              </div>
            ))
        )
      }
            
          </div>
        </div>
      </section>


    </>
  );
}

export default Category;
