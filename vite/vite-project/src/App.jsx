import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./components/Card.jsx"
import pic1 from "./img.jpeg"
import pic2 from "./img2.jpeg"
import pic3 from "./img3.jpeg"
import pic4 from "./bg.jpeg"
import './App.css'
import Map from './components/map.jsx'
import Movies from './components/movies.js'
import Map1 from './components/map.jsx'

function App() {
  // return<div className='app'>
  // <Card name="Mohit Jain" pic={pic1} roll="1"/>
  // <Card name="Aman" pic={pic2} roll="2"/>
  // <Card name="Don" pic={pic3} roll="3"/>
  
  // </div>
  return <div>
    <Map1/>
  </div>
}

export default App
