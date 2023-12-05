import React from 'react'

import Navbar from "./comp/Navbar"
import Slider from "./comp/Slider"
import Card from "./comp/Card"

import img1 from './comp/img/wall (1).jpg'
import img2 from './comp/img/wall (2).jpg'
import img3 from './comp/img/wall (3).jpg'
import img4 from './comp/img/wall (4).jpg'
import img5 from './comp/img/wall (5).jpg'
import img6 from './comp/img/wall (6).jpg'
import img7 from './comp/img/wall (7).jpg'
import Form from "./comp/Form"
import Footer from "./comp/Footer"
import Contact from "./comp/Contact"
import Service from "./comp/Service"


const Home
 = () => {
  return (


    

    <div>

      <Navbar/>

      <Slider/>

      <div className="cards_cont">
      <Card img={img5} planet={"planate 302"}/>
      <Card img={img6} planet={"planet dune"}/>
      <Card img={img7} planet={"area 997"}/>
      <Card img={img1} planet={"moon"} />
      <Card img={img7} planet={"area 57"}/>
      <Card img={img2} planet={"mars"}/>
      <Card img={img3} planet={"set"}/>
      <Card img={img4} planet={"earth"}/>


      </div>
      <Form/>
      <Footer/>

  
</div>

  )
}

export default Home

