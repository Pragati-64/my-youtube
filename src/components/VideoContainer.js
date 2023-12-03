import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  
  const [videoList, setVideoList] = useState([]);

  useEffect(()=>{
    getVideos()
  }, [])

  async function getVideos(){
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideoList(json?.items)
  }

  return (
    <div className='flex flex-wrap'>
      {
        videoList.map( 
          (video)=> <Link to={"/watch?v=" + video.id}><VideoCard info={video} key={video.id} /></Link> 
          )
      }
    </div>
  )
}

export default VideoContainer