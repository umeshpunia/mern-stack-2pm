import { Link } from "react-router-dom";
import {apiUrl,imgUrl} from '../config'
import axios from 'axios'
import { useEffect, useState } from "react";


function Products() {

  const [products,setProducts]=useState([])

  useEffect(()=>{

    getPro()
  },[])

  async function getPro(){
    try {
      let res=await axios.get(`${apiUrl}/product/all`)
      setProducts(res.data.msg)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(products)

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5">Products</h1>
        <Link to="/addpro" className="btn btn-info">
          Add Product
        </Link>
        <table className="table my-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            products?.map(product=>(
              <tr key={product._id}>
              <th>1</th>
              <td>{product?.name}</td>
              <td>
                <img height="50" src={`${imgUrl}/products/${product?.picture}`} alt={`abc`} />
                </td>
              <td>
                <a 
                href={`http://localhost/${product._id}`}
                target="_blank"
                 className='btn btn-warning'>View</a>
              </td>
              
            </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;


