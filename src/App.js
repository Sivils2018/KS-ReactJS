import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Login, Wishlist, Register, Home, Products} from './components';


function App()
{
return (
  <Router>
 <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to={"/Home"} className="navbar-brand" style={{color: "red", fontSize: "40px", fontFamily: "serif", borderStyle: "solid"}}> IWantThis </Link>
 <div className="collapse navbar-collapse" id="navbarSupportContent">
      <ul className="navbar-nav mr-auto" style={{margin: "20px"}}>
            <li className="nav-item"> <Link to={"/Home"} className="nav-link">Home </Link> </li>
            <li className="nav-item"> <Link to={"/Login"} className="nav-link">Login </Link> </li>
            <li className="nav-item"> <Link to={"/Register"} className="nav-link"> Register </Link> </li>
            <li className="nav-item"> <Link to={"/Wishlist"} className="nav-link"> Wishlist</Link> </li>
      </ul>
</div>
</nav>
 <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Home" element={<Home />} /> 
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path='/Products' element={<Products />} /> 
   </Routes> 
 </div> 
 </Router>
  )
}

export default App;
