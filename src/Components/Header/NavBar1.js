import React from 'react'

function NavBar1() {
    return (
        <div className="container-xl container-lg container-md container-sm container-sm mt-5">
            {/* Nav Section 2 */}

            <div className="navbar-container mt-5">
                <h1 className="nav-txt text-capitalize text-center mt-5">Zomato</h1>

                <h3 className="text-secondary font-monospace text-capitalize text-center">
                    Discover the best food & drinks in Bengaluru
                </h3>


                <div className="row">
                    <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12"></div>
                    <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12">
                        <div class="input-group input-group-lg mb-3 mt-5">
                            <button
                                class="btn btn-outline-danger dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-map-pin mb-1 me-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="11" r="3"></circle>
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                </svg>
                                Bengaluru, India
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" to="#">
                                        Goa, India
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" to="#">
                                        Patna, India
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" to="#">
                                        Mumbai, India
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" to="#">
                                        Pune, India
                                    </a>
                                </li>
                            </ul>
                            <input
                                type="text"
                                class="input-txt form-control"
                                aria-label="Text input with dropdown button"
                                placeholder="Search for restaurant , cusine or a dish"
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12"></div>
                </div>

            </div>
        </div>
    )
}

export default NavBar1
