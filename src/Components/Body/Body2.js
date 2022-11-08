import React, { Component } from "react";

export class Body2 extends Component {
  render() {
    return (
      <div className="container-xl container-lg container-md container-sm container-sm mt-5">
        <h1 className="text-start text-dark">Collections</h1>

        <div className="row mt-2">
          <div className="col-xl-9 col-lg-6 col-md-3 col-sm-1 col-xs-12">
            <h4 className="text-start text-secondary fw-light">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bengaluru, based on trends
            </h4>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
            <h4 className="body2-txt text-start fw-light">
              All collections in Bengaluru
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-caret-right ms-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#FF7E8B"
                fill="#FF7E8B"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12l-4 -4v8z"></path>
              </svg>
            </h4>
          </div>
        </div>



        {/* Pics */}

        <div className="row mt-5">
            <div className="col-xl-3">
            <div className="card1">
                <img src="https://images.pexels.com/photos/3951670/pexels-photo-3951670.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-bottom-left card-title mb-4 text-white">Romantic Dining</h5>
                    <p className="card-bottom-left card-text text-white">11 Places 
                    <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-caret-right ms-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#fff"
                            fill="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12l-4 -4v8z"></path>
              </svg></p>
                </div>
            </div>
            </div>

            <div className="col-xl-3">
            <div className="card1">
                <img src="https://images.pexels.com/photos/2799556/pexels-photo-2799556.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-bottom-left card-title mb-4 text-white">Live Cricket Screening</h5>
                    <p className="card-bottom-left card-text text-white">6 Places 
                    <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-caret-right ms-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#fff"
                            fill="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12l-4 -4v8z"></path>
              </svg></p>
                </div>
            </div>
            </div>

            <div className="col-xl-3">
            <div className="card1">
                <img src="https://images.pexels.com/photos/2286972/pexels-photo-2286972.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-bottom-left card-title mb-4 text-white">Best Microbreweries</h5>
                    <p className="card-bottom-left card-text text-white">20 Places 
                    <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-caret-right ms-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#fff"
                            fill="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12l-4 -4v8z"></path>
              </svg></p>
                </div>
            </div>
            </div>

            <div className="col-xl-3">
            <div className="card1">
                <img src="https://images.pexels.com/photos/2432221/pexels-photo-2432221.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-bottom-left card-title mb-4 text-white">New in Town</h5>
                    <p className="card-bottom-left card-text text-white">8 Places 
                    <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-caret-right ms-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="#fff"
                            fill="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12l-4 -4v8z"></path>
              </svg></p>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Body2;
