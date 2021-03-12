import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className="footer">
      <p>Kaniet Oskonbaev copyright {(new Date().getFullYear())}</p>
          <div className="Footer-Subtitle">
           San Franciscos Privately Owned Public Spaces
           </div>
    </div>
  )
}

export default Footer