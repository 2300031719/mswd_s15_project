import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FunState from './FunState'
import { About } from './About'
import Register from './Register'
import Login from './Login'

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
        {/* <Routes>
            <Route path='/' element=<FunState/> ></Route>
            <Route path='/about' element=<About/> ></Route>
        </Routes> */}
    </div>
  )
}
export default Home