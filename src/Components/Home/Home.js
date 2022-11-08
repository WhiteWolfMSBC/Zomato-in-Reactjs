import React from 'react'
import Body1 from '../Body/Body1';
import Body2 from '../Body/Body2';
import Body3 from "../Body/Body3";
import Footer from "../Footer/Footer";
import Footer1 from '../Footer/Footer1'
import NavBar1 from '../Header/NavBar1'

function Home() {
  return (
    <div className="container-fluid mt-5">

      {/* Navbar1 */}

      <NavBar1/>

      {/* Body */}

      <Body1 />
      <Body2 />
      <Body3 />

      {/* Footer */}

      <Footer />
      <Footer1 />

    </div>
  )
}

export default Home
