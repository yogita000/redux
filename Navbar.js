import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <a class="navbar-brand" href="#">
        Shopping
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      {/* <BrowserRouter> */}
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item  ">
            {/* <a class="nav-link" href="#"> */}
            <Link className="nav-link" to="/home">
              Home
            </Link>
            {/* <span class="sr-only">(current)</span> */}
            {/* </a> */}
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#"> */}
            <Link className="nav-link" to="/products">
              Products
            </Link>
            {/* </a> */}
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#"> */}
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
            {/* </a> */}
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="#"> */}
            <Link className="nav-link" to="/details">
              Details
            </Link>
            {/* </a> */}
          </li>

          <li class="nav-item ">
            <a class="nav-link " href="#">
              <i class="fas fa-shopping-cart" />
            </a>
          </li>
        </ul>
      </div>
      {/* </BrowserRouter> */}
    </nav>
  );
};

export default Navbar;
