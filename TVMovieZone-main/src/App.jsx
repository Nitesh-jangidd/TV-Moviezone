import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Modal from "./Components/Modal"
import AddCard from "./Components/AddCard"
function App() {
 
  document.body.style.backgroundColor=' black'
  return (
    <>
    <div className="sticky top-0 z-50 ">
    <Navbar/>
    </div>
    
    <AddCard/>
    
    </>
  )
}

export default App
