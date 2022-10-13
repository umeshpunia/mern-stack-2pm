import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl, mediaUrl } from "../config";
import {Link} from 'react-router-dom'
function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    try {
      let res = await axios.get(`${apiUrl}/categories`);
      console.log(res);
      setCategories(res.data.msg);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="fruit_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <hr />
            <h2>Categories</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="fruit_container">
            {categories?.map((cat) => (
              <div className="box" key={cat._id}>
                <img src={`${mediaUrl}/categories/${cat.picture}`} alt="" />
                <div className="link_box">
                  <h5>{cat.name}</h5>
                  <Link to={`/category/${cat._id}`}>View Now </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CategorySection;
// react/category/1ukjasjkfa87374