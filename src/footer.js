import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="site_footer" className="footer">
        <div class="container-fluid m-0 p-0">
          <div class="row no-gutters mx-5">
            <div class="col-12 col-lg-auto px-lg-5 mx-lg-5">
              <h6 class="mt-3 footer-title collapsed">CUSTOMER SERVICE</h6>
              <ul class="mobile-collapse list-unstyled">
                <li>
                  <a href="#" class="footer-link text-white">
                    Shipping information
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link text-white">
                    Refund
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-auto px-lg-4 mx-lg-5">
              <h6 class="mt-3 footer-title collapsed">NEWS AND EVENTS</h6>
              <ul class="mobile-collapse list-unstyled">
                <li>
                  <a href="#" class="footer-link text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link text-white">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link text-white">
                    Recipes
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-auto px-lg-5 mx-lg-5">
              <h6 class="mt-3 footer-title collapsed">PAY SECURELY</h6>
              <ul class="mobile-collapse list-unstyled">
                <li>
                  <a href="#" class="footer-link text-white">
                    PAY U
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link text-white">
                    PAYPAL
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-lg-auto px-lg-5 mx-lg-5">
              <ul class="mobile-collapse list-unstyled"></ul>
            </div>
            <div class="sign-up col-12 col-lg-auto">
              <h6 class="mt-3 footer-title collapsed">
                <b>Sign up to our news letter</b>
              </h6>
              <ul class="mobile-collapse list-unstyled">
                <span>
                  <li class="footer-text">
                    signup for our mails and choc-full
                  </li>
                  <li class="footer-text">
                    of new arrivals and special offers.
                  </li>
                </span>
                <button
                  className="btn btn-danger text-center px-2 mt-2 mx-auto"
                  onClick={e => this.sendData(e)}
                >
                  Subscribe now
                </button>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-4">
              <div class="text-center">
                <span class="footer-text">
                  Smoor&copy;2019 | All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
