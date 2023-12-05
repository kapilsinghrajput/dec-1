import React from 'react'
import Naviteam from "./Naviteam"

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="logo">space-x</div>
        <nav>
            <ul>
                <Naviteam path="/" iteam="Home"/>
                <Naviteam iteam="About" path="/about"/>
                <Naviteam iteam="service" path="/contact"/>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
