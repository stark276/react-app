// src/Project.js

import React from 'react'
import logo from './logo.svg'

function POPOSSpace(props) {
 const { name, image, address } = props
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}     
        width="300"
        height="300"
        alt="IMAGESS"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}
function MyComp(props) {
 
  <div>
    <h1>{props.message}</h1> // Hello World
    <p>{props.value}</p> // 42
  </div>
}

export default POPOSSpace