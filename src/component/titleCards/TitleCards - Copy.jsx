import React, { useRef, useEffect, useState } from 'react';
import '../titleCards/TitleCards.css';
import cards from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

export default function TitleCards({ title , category}) {
  
  const [apiData, setApiData] = useState([]);
  const listRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OThiYjBlMTMyMjVhNjI4OWZhNDBlN2M0OGM1MzRmZiIsIm5iZiI6MTc1NTkyNjUzOS40OCwic3ViIjoiNjhhOTUwMGJiZTRkYmEwNjExMWU0NmI5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LKHHLTlE59njNTlI5XxPYPG9850yTW0ZG1PMFbUGo-U'
    }
  };
  

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category? category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    const el = listRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      if (el) {
        el.scrollLeft += event.deltaX !== 0 ? event.deltaX : event.deltaY;
      }
    };

    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (el) {
        el.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular On Netflix'}</h2>
      <div className='card-list' ref={listRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={`${card.original_title}'s Poster`} />
            <p className='card-name'>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
