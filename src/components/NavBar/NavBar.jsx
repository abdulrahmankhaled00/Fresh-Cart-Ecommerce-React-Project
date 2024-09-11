import React, { useContext } from 'react';
import { Link, NavLink,  } from 'react-router-dom';
import style from './NavBar.module.css';
import logo from '../../Assets/images/freshcart-logo.svg';
import { userContext } from '../../context/UserContext.js';
import { useSelector } from 'react-redux';
import { cartContext } from '../../context/CartContext.js';

export default function NavBar() {
  let {List,isloading,isErr}=useSelector(state=>state.wishList)
  let {cartItemsQountity}=useContext(cartContext)

  let { token, setToken } = useContext(userContext);

  function logOut() {
    localStorage.removeItem('token');
    setToken(null);
    // navigate('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {token !== null ?
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/products">Products</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/categories">Categories</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/brands">Brands</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/allorders">all Ordars</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto d-flex align-items-lg-center gap-lg-3">
                  <li>
                    <div className="list-inline-item">
                      <Link to={'wishlist'} className="text-muted position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
                          {List.length}
                          <span className="visually-hidden">unread messages</span>
                        </span>
                      </Link>
                    </div>
                  </li>

                  <li className=' ms-lg-4'>
                    <div className="list-inline-item me-lg-0">
                      <Link to={'cart'} className="text-muted position-relative" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
                          {cartItemsQountity}
                          <span className="visually-hidden">unread messages</span>
                        </span>

                      </Link>
                    </div>
                  </li>
                  <li className="mx-lg-3">
                    <NavLink className="nav-link" onClick={() => logOut()} to="/login">Logout</NavLink>
                  </li>
                </ul>
              </>
              :
              <>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#"><i className="fab fa-instagram"></i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="#"><i className="fab fa-facebook"></i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="#"><i className="fab fa-tiktok"></i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="#"><i className="fab fa-twitter"></i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="#"><i className="fab fa-linkedin"></i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="#"><i className="fab fa-youtube"></i></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-black" to="/register">Register</NavLink>
                  </li>
                </ul>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  )
}
