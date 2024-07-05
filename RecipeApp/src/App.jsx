import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Create from './Pages/Create'
import SavedRecipe from './Pages/SavedRecipe'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-recipe' element={<Create/>}></Route>
          <Route path='/saved-recipe' element={<SavedRecipe/>}></Route>
          <Route path='/auth/register' element={<Registration />}></Route>
          <Route path='/auth/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    
    </>
  )
}

export default App
