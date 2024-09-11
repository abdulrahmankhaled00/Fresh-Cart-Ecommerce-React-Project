/* eslint-disable no-unused-vars */
import React from 'react'
import style from './Footer.module.css'
import pyament1 from "../../Assets/images/payment/amazonpay.svg"
import pyament2 from "../../Assets/images/payment/american-express.svg"
import pyament3 from "../../Assets/images/payment/mastercard.svg"
import pyament4 from "../../Assets/images/payment/paypal.svg"
import pyament5 from "../../Assets/images/payment/visa.svg"

import appButton1 from "../../Assets/images/appbutton/appstore-btn.svg"
import appButton2 from "../../Assets/images/appbutton/googleplay-btn.svg"

export default function Footer() {
  return (
    <>
<footer className="footer mt-5">
  <div className="container">
    <div className="row g-4 py-5">
      <div className="col-12">
        <h4 className="my-1">Get Fresh Cart App</h4>
        <h6 className="my-2 text-secondary">
          We will send you the link. Open it on your phone and download the app.
        </h6>
        <div className="row p-0 pt-3">
          <div className="col-12 col-md-8">
            <input className="form-control" placeholder="Email..." type="text" />
          </div>
          <div className="col-12 col-md-4 mt-2 mt-md-0 p-md-0">
            <button className="btn btn-main bg-main text-white w-100">Share App Link</button>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top py-4">
      <div className="row align-items-center">
        <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
          <ul className="list-inline mb-0">
            <li className="list-inline-item text-dark">Payment Partners</li>
            <li className="list-inline-item">
              <a href="#!"><img src={pyament1} alt="Amazon Pay" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={pyament2} alt="American Express" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={pyament3} alt="MasterCard" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={pyament4} alt="PayPal" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={pyament5} alt="Visa" /></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-7 mt-4 mt-lg-0">
          <ul className="list-inline mb-0 text-lg-end text-center">
            <li className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with FreshCart</li>
            <li className="list-inline-item ms-4">
              <a href="#!">
                <img src={appButton1} alt="App Store" style={{ width: '140px' }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <img src={appButton2} alt="Google Play" style={{ width: '140px' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-top py-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
          <span className="small text-muted">
            © 2022 <span id="current-year">{new Date().getFullYear()}</span> FreshCart eCommerce HTML Template. All rights reserved. Powered by
            <a href="https://codescandy.com/">Codescandy</a>.
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-12 text-md-end text-center">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="#!" className="text-muted" aria-label="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="text-muted" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="text-muted" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="text-muted" aria-label="google">
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="text-muted" aria-label="linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
