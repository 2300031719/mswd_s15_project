import React from 'react'
import './Layout.css'
import { Link, Route, Routes} from 'react-router-dom'
import { About } from './About'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import FunState from './FunState'
import ResponsiveAppBar from './ResponsiveAppBar'
import DataRestApi from './DataRestApi'
import { Registration } from './Registration'
import Profile from './Profile'
import Logout from './Logout'


const Layout = () => {
  return (
    <div className="container">
    <div className="header">
      <ResponsiveAppBar />
        {/* <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/counter">Counter</Link>&nbsp;
            <Link to="/register">Register</Link>&nbsp;
            <Link to="/login">Login</Link>&nbsp;
        </nav> */}
    </div>
    <div className="lsb">LSB</div>
    <div className="main">
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/counter" element={<FunState />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/datafetch" element={<DataRestApi/>}></Route>

     </Routes>
    </div>
    <div className="footer">Footer</div>
    
    
    </div>
  )
}
export default Layout