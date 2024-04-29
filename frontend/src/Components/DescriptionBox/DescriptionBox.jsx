import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-nevigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that facilitate the buying and selling of products or services over the internet. 
                It serves at virtual marketplace where businesses and individuals can showcase their products, Intaract with customers and conduct transaction without the need for a physical presence. 
                E-commerce websites have gained immense popularity due to their convenience, accessibility and the goal reach their offer.<br/><br/>
                E-commerce website typically present products or services along with detailed descriptions, images, prices and any avilable variations.
                Each product usually has Its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}
