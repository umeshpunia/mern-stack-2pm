import React from 'react'

function Footer() {
  return (
    <>
         <section className="info_section layout_padding">
      <div className="container">
        <div className="info_logo">
          <h2>NiNom</h2>
        </div>
        <div className="info_contact">
          <div className="row">
            <div className="col-md-4">
              <a href="">
                <img src="assets/images/location.png" alt="" />
                <span> Passages of Lorem Ipsum available </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <img src="assets/images/call.png" alt="" />
                <span> Call : +012334567890 </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <img src="assets/images/mail.png" alt="" />
                <span> demo@gmail.com </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="info_form">
              <form action="">
                <input type="text" placeholder="Enter your email" />
                <button>subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="info_social">
              <div>
                <a href="">
                  <img src="assets/images/facebook-logo-button.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="assets/images/twitter-logo-button.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="assets/images/linkedin.png" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="assets/images/instagram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- end info section -->

    <!-- footer section --> */}
    <section className="container-fluid footer_section">
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved. Design by
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </section>
    </>
  )
}

export default Footer