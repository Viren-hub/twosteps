import React from 'react'
import './Product.css'
import watch from '../../images/watch.jpg'
import shooes from '../../images/shooes.jpg'
import glasses from '../../images/glasses.jpg'
import earphone from '../../images/earphone.jpg'
import tShirt from '../../images/tShirt.jpg'
import jeans from '../../images/jeans.jpg'
export default function Product() {
  return (
    <div className='product container'>
      <h5>Splecial product for you!</h5>
      <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <div className='item'>
          <div className='image'>
            <img className='img' src={watch} alt="BigCo Inc. logo"/>
            <div className='rating'>
              <p>4.5 <i class="fa fa-star" aria-hidden="true"></i></p>           
            </div>
          </div>
          <div className='description'>
           <div className='product-name'>
             <h5>ColorFit Pro 4</h5>
             <button className='product-btn'>Buy Now</button><br></br>
             <button className='product-btn'>Add to Cart</button>
           </div>
           <div className='product-price'>
            <h6 className='old-prise'><i class="fa fa-inr" aria-hidden="true"></i> 3999</h6>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> 3499</h4>
           </div>
          </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 '>
        <div className='item'>
          <div className='image'>
            <img className='img' src={shooes} alt="BigCo Inc. logo"/>
              <div className='rating'>
                <p>4.5 <i class="fa fa-star" aria-hidden="true"></i></p>           
              </div>
            </div>
          <div className='description'>
           <div className='product-name'>
             <h5>Nike Air Force </h5>
             <button className='product-btn'>Buy Now</button><br></br>
             <button className='product-btn'>Add to Cart</button>
           </div>
           <div className='product-price'>
            <h6 className='old-prise'><i class="fa fa-inr" aria-hidden="true"></i> 6999</h6>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> 5499</h4>
           </div>
          </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 '>
        <div className='item'>
          <div className='image'>
            <img className='img' src={glasses} alt="BigCo Inc. logo"/>
              <div className='rating'>
                <p>4.5 <i class="fa fa-star" aria-hidden="true"></i></p>           
              </div>
            </div>
          <div className='description'>
           <div className='product-name'>
             <h5>OUTDOORSMAN</h5>
             <button className='product-btn'>Buy Now</button><br></br>
             <button className='product-btn'>Add to Cart</button>
           </div>
           <div className='product-price'>
            <h6 className='old-prise'><i class="fa fa-inr" aria-hidden="true"></i> 1599</h6>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> 999</h4>
           </div>
          </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 '>
        <div className='item'>
          <div className='image'>
            <img className='img' src={jeans} alt="BigCo Inc. logo"/>
              <div className='rating'>
                <p>4.5 <i class="fa fa-star" aria-hidden="true"></i></p>           
              </div>
            </div>
          <div className='description'>
           <div className='product-name'>
             <h5>DIESEL</h5>
             <button className='product-btn'>Buy Now</button><br></br>
             <button className='product-btn'>Add to Cart</button>
           </div>
           <div className='product-price'>
            <h6 className='old-prise'><i class="fa fa-inr" aria-hidden="true"></i> 1699</h6>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> 1599</h4>
           </div>
          </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 '>
        <div className='item'>
          <div className='image'>
            <img className='img' src={tShirt} alt="BigCo Inc. logo"/>
              <div className='rating'>
                <p>4.5 <i class="fa fa-star" aria-hidden="true"></i></p>           
              </div>
            </div>
          <div className='description'>
           <div className='product-name'>
             <h5>Nike tShirt</h5>
             <button className='product-btn'>Buy Now</button><br></br>
             <button className='product-btn'>Add to Cart</button>
           </div>
           <div className='product-price'>
            <h6 className='old-prise'><i class="fa fa-inr" aria-hidden="true"></i> 999</h6>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> 499</h4>
           </div>
          </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 '>
        <div className='item'>
          <div className='image'>
            <img className='img' src={earphone} alt="BigCo Inc. logo"/>
              <div className='rating'>
                <p>4.5 <i class="fa fa-star" aria-hidden="true"></i></p>           
              </div>
            </div>
          <div className='description'>
          <div className='product-name'>
             <h5>Apple Airpods</h5>
             <button className='product-btn'>Buy Now</button><br></br>
             <button className='product-btn'>Add to Cart</button>
           </div>
           <div className='product-price'>
            <h6 className='old-prise'><i class="fa fa-inr" aria-hidden="true"></i> 4999</h6>
            <h4><i class="fa fa-inr" aria-hidden="true"></i> 3499</h4>
           </div>
          </div>
          </div>
        </div>
       
      </div>

    </div>
  )
}
