import React,{useEffect, useRef} from 'react'
import logo from '../../../public/logo.png';
import '../navbar/Navbar.css';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import porfil_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div ref={navRef} className='navbar'>
        <div className="left-navbar">
            <img className='logo' src={logo} alt="logo" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className="right-navbar">
          <img className='search-icon' src={search_icon} />
          <p>Children</p>
          <img className='bell-icon' src={bell_icon} />
          <div className="profile">
            <img className='profile-img' src={porfil_img} />
            <img className='caret-icon' src={caret_icon} />
            <span onClick={()=>{navigate('/login')}}>Sign out of Netflix</span>
          </div>

        </div>
    </div>
  )
}
