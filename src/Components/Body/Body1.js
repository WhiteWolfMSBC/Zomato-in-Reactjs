import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class Body1 extends Component {
  render() {
    return (
      <div className="container-xl container-lg container-md container-sm container-sm mt-5">
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-xs-12">
          <div className="card">
  <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" width="353px" height="192px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Order Online</h5>
    <p className="card-text">Stay home and Order to your doorsteps.</p>
  </div>
</div>
          </div>

          <div className="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-xs-12">
          <div className="card">
  <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" width="353px" height="192px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Dining</h5>
    <p className="card-text">View the city's favourite dining venues.</p>
  </div>
</div>
          </div>

          <div className="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-xs-12">
          <div className="card">
  <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" width="353px" height="192px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nightlife and clubs</h5>
    <p className="card-text">Eplore the city's top nightlife outlets</p>
  </div>
</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body1;
