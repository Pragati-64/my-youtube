import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard'

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
        videoList.map((video)=> <VideoCard info={video} key={video.id} />
        )
      }
    </div>
  )
}

export default VideoContainer