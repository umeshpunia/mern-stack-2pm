import { Link } from "react-router-dom";
import {apiUrl,imgUrl} from '../config'
import axios from 'axios'
import { useEffect, useState } from "react";


function Category() {

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

  console.log(categories)

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5">Categories</h1>
        <Link to="/addcat" className="btn btn-info">
          Add Category
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
            categories?.map(category=>(
              <tr key={category._id}>
              <th>1</th>
              <td>{category?.name}</td>
              <td>
                <img height="50" src={`${imgUrl}/categories/${category?.picture}`} alt={`abc`} />
                </td>
              <td>
                <a 
                href={`http://localhost/${category._id}`}
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

export default Category;



// http://localhost:8080/assets/images/categories/