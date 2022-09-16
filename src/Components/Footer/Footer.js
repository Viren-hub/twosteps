import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='suscribe'>
      <h2 className='suscribe-note'>Suscribe to get 30% discount</h2>
        <div className='input'>
            <input type={'email'} className='input-field'></input> 
            <button className='order-button'>Order Now</button>          
        </div>  
        <div><h1 className='suscribe-note'> ______</h1></div>
      </div>
    </div>
  )
}
