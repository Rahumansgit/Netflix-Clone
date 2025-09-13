import React from 'react'
import Navbar from '../../component/navbar/Navbar';
import TitleCards from '../../component/titleCards/TitleCards';
import Footer from '../../component/footer/Footer';
import './Home.css'
import hero_img from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero-section">
          <img className='hero-img' src={hero_img} />
          <div className="hero-caption">
            <img src={hero_title} className='hero-title' />
            <p className="hero-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et quae dolore numquam illo maxime quas distinctio voluptas, minus laboriosam quisquam. Suscipit reiciendis, aliquid iste ad, inventore ipsa magni necessitatibus eos nostrum, quis aperiam omnis.</p>
            <div className="hero-btns">
              <button className="play-btn"><img src={play_icon} alt="" /> Play</button>
              <button className="info-btn"><img src={info_icon} alt="" /> More Info</button>
            </div>
            <TitleCards />
          </div>
        </div>
        <div className="more-cards">
        <TitleCards title={'Blockbuster Movies'} category={'popular'}/>
        <TitleCards title={'Only On Netflix'} category={'top_rated'}/>
        <TitleCards title={'Upcomings'} category={'upcoming'}/>
        <TitleCards title={'Top Pics For You'}/>
        </div>
        <Footer />
    </div>
  )
}

