import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="container-xl container-lg container-md container-sm container-sm mt-5">

        <div className="row">
          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12"></div>

          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-12 col-xs-12">
          <div className="card2 mb-3">

            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <img src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png" className="img-fluid rounded-start mt-5" alt="..."/>
              </div>
              <div className="col-xl-8 col-lg-6 col-md-4 col-sm-2 col-xs-12">
                <div className="card-body">
                  
                  <h1 className="text-start text-dark">Get the Zomato app</h1>

                  <h5 className="text-start text-secordary fw-light fs-5 mt-2">We will send you a link, open it on your phone to download the app</h5>

                  
                  
                  
                  {/* Radio Button */}

                  <input class="input1 mt-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="label1 ms-2" for="flexRadioDefault2">
                      Email
                    </label>

                    <input class="input1 mt-3 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="label1 ms-2" for="flexRadioDefault1">
                               Mobile 
                            </label>


                 
                 
                  {/* Input Type */}

                  <div className="row mt-4">
                    <div className="col-xl-8 col-lg-6 col-md-3 col-sm-1 col-xs-12">
                    <div className="inputContainer">
                    <input type="email" id="date" class="input form-control"/>
                    <label for="date" class="label">Email Id</label>
                  </div>
                    </div>

                    <div className="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-xs-12">
                    <div className="inputContainer">
                    <button className='btn btn-outline-danger btn-lg px-4'>Share</button>
                  </div>
                    </div>
                  </div>

                  <p className="card-text"><small className="text-muted">Download app from</small></p>


                    <div className="row mt-2 mb-3">
                      <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12">
                        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" width="137px" height="40px" className='img-fluid' alt="" />
                      </div>

                      <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12">
                      <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" width="137px" height="40px" className='img-fluid' alt="" />
                      </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="col-xl-3"></div>
        </div>



          <h1 className="text-start text-dark mt-5">
          Explore options near me
          </h1>




          {/* Accordion*/}

  <div className="accordion mt-3" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Popular Restaurant Chains
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
</div>



<div className="accordion mt-3" id="accordionExample">
<div className="accordion-item1 mt-3">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Top Restaurant Chains
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
</div>


<div className="accordion mt-3" id="accordionFlushExample">
<div className="accordion-item2 mt-3">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Cities We Deliver To
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>



      </div>
    )
  }
}

export default Footer
