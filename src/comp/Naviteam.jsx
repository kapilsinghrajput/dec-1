import React from 'react'
import { NavLink } from "react-router-dom"

const Naviteam = (props) => {
  return (
    <div>
      <li><NavLink to={props.path}>{props.iteam}</NavLink></li>
    </div>
  )
}

export default Naviteam
