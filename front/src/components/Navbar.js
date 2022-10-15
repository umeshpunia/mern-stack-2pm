import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
         <section className="nav_section">
      <div className="container">
        <div className="custom_nav2">
          <nav className="navbar navbar-expand custom_nav-container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/"
                      >Home <span className="sr-only">(current)</span></Link
                    >
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart <sup>2</sup></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="testimonial.html">Testimonial</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contact.html">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">Login</Link>
                  </li>
                </ul>
                <form
                  className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0"
                >
                  <button
                    className="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    </>
  )
}

export default Navbar