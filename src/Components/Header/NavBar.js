import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div class="container-fluid">
        {/* Nav Section 1 */}

        <nav class="navbar fixed-top navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse container-xl container-lg container-md container-sm container-sm"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-device-mobile text-dark mb-2"
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="6" y="3" width="12" height="18" rx="2"></rect>
                      <line x1="11" y1="4" x2="13" y2="4"></line>
                      <line x1="12" y1="17" x2="12" y2="17.01"></line>
                    </svg>
                    <span class="text-dark fs-3 fw-semiboldms-2">
                      Get the App
                    </span>
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">
                      <h5 class="text-secondary">Investor Relations</h5>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">
                      <h5 class="text-secondary">Add Restaurant</h5>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/login">
                      <h5 class="text-secondary">Login-In</h5>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/signup">
                      <h5 class="text-secondary">Sign-Up</h5>
                    </Link>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
