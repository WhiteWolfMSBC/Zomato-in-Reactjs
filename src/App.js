import './App.css';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home/Home';
import LoginIn from './Components/Credential/LoginIn';
import SignUp from './Components/Credential/SignUp'

import {
  BrowserRouter as Router ,Routes ,Route,

} from 'react-router-dom';


function App() {
  return (
    <div className="App">
 
      {/* Routes */}

      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
