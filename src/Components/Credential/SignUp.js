import React from 'react'

function SignUp() {
  return (
    <div className="container-xl container-lg container-md container-sm container-sm mt-5">
    <div className="row">
      <div className="col-xl-4"></div>
      <div className="col-xl-4 m-5">
        <section className="loginform m-5">
          <h1 className="text-center text-danger">Sign-Up Form</h1>

          <div class="inputContainer mt-4">
            <input type="email" id="date" class="input form-control" />
            <label for="date" class="label">
              Name
            </label>
          </div>

          <div class="inputContainer mt-4">
            <input type="email" id="date" class="input form-control" />
            <label for="date" class="label">
              Email Id
            </label>
          </div>

          <div class="inputContainer mt-4">
            <input type="tel" id="date" class="input form-control" />
            <label for="date" class="label">
              Contact No
            </label>
          </div>

          <div class="inputContainer mt-4">
            <input type="password" id="date" class="input form-control" />
            <label for="date" class="label">
              Password
            </label>
          </div>

          <div class="inputContainer mt-4">
            <button className="submitBtn btn btn-outline danger">
              Submit
            </button>
          </div>
        </section>
      </div>
      <div className="col-xl-4"></div>
    </div>
  </div>
  )
}

export default SignUp
