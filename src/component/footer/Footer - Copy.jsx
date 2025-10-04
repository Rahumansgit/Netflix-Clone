import React from 'react'
import '../footer/Footer.css';
import fb_icon from '../../assets/facebook_icon.png';
import insta_icon from '../../assets/instagram_icon.png';
import yt_icon from '../../assets/youtube_icon.png';
import x_icon from '../../assets/twitter_icon.png';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="icons">
        <img src={fb_icon} />
        <img src={insta_icon} />
        <img src={yt_icon} />
        <img src={x_icon} />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">&copy; 1997-2025 Netflix, Inc.</p>
    </div>
  )
}
