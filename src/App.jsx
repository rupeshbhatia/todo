import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { Route, Routes } from 'react-router-dom'
import Todoinput from './Components/Todoinput'
import './App.css'
function App() {
  let[coords,setCoords]=useState({})

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    


  } else { 
console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
setCoords( {lat:(position.coords.latitude),lon:(position.coords.longitude)})
let a={lat:(position.coords.latitude),lon:(position.coords.longitude)}
localStorage.setItem("data",JSON.stringify(a))


}

  useEffect(()=>{
   
    getLocation();

   
  },[])
  return (
  <>
  
<Routes>
<Route path='/' element={<SignUp/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/todoinput' element={<Todoinput />}/>
</Routes>
  </>
  
  )
}

export default App