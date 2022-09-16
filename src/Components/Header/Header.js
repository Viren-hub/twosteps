import React from 'react'
import './Header.css'


export default function Header() {
  let url='d'
  return (
    <div className='header'>
      <div className='icon'>
        <h3>Two Steps</h3>
      </div>
      <div className='nav-item'>
      <ul>
        <li><a href={url}>About us</a></li>
        <li><a href={url}>Products</a></li>
        <li><a href={url}>Delivery</a></li>
      </ul>
      </div>
      <div className='search-field'>
          <div className='search-button-div'>
            <i class="fa fa-search search-button" aria-hidden="true"></i>
            <input type={'email'} className='input-field'></input>
          </div>
           
          <i class="fa fa-shopping-cart cart" aria-hidden="true"></i>
      </div>
    </div>
  )
}
