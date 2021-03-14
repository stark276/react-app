// src/Project.js

import React from 'react'
import { Link } from 'react-router-dom'
import './POPOSSpace.css'

function POPOSSpace(props) {
 const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
      <Link className="POPOSSpace-title" to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
        <h1 >{name}</h1>
      </Link>
      
      <div className="POPOSSpace-info">{address}</div>
      <div className = 'hours'>{hours}</div>
    </div>
  )
}

export default POPOSSpace