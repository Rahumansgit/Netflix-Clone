import React, { useEffect, useState } from 'react'
import '../player/Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

export default function Player() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name:'',
        key:'',
        published_at:'',
        type:''
    });

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OThiYjBlMTMyMjVhNjI4OWZhNDBlN2M0OGM1MzRmZiIsIm5iZiI6MTc1NTkyNjUzOS40OCwic3ViIjoiNjhhOTUwMGJiZTRkYmEwNjExMWU0NmI5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.LKHHLTlE59njNTlI5XxPYPG9850yTW0ZG1PMFbUGo-U'
        }
      };
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    },[]) 

    return (
        <div className='player'>
            <img src={back_arrow} className='back-arrow' onClick={()=>{navigate('/')}} />
            <iframe width='90%' height='90%' src={`https://youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}
