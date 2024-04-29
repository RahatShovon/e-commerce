import React from 'react';
import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
