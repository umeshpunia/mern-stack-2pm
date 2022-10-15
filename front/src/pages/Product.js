import {useState,useEffect} from 'react'
import axios from 'axios'

import {apiUrl,mediaUrl} from '../config'
import { useParams } from 'react-router-dom'

function Product() {

    const [product,setProduct]=useState(null)

    const {id}=useParams()

    useEffect(()=>{
        async function getPro(){
            try {
                
            let res=await axios.get(`${apiUrl}/product/${id}`)
            setProduct(res.data.msg)
            } catch (error) {
                console.log(error)
            }
        }

        getPro()
    },[])

  return (
    <>
    
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="box">
          <div className="detail-box">
            <h2>{product?.name}</h2>
            <h3>&#8377;{product?.price}</h3>
            <p>
              {product?.description}
            </p>
          </div>
          <div className="img-box">
            <img src={`${mediaUrl}/products/${product?.picture}`} alt="" />
          </div>
          <div className="btn-box">
            <a href=""> Buy Now </a>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Product