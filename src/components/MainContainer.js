import React, { useEffect } from 'react'
import ButtonGroup from './ButtonGroup'
import VideoContainer from './VideoContainer'
import { YOUTUBE_VIDEO_API } from '../utils/constants'

const MainContainer = () => {

  useEffect(()=>{
    getVideos()
  }, [])

  async function getVideos(){
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  }

  return (
    <div>
        <ButtonGroup />
        <VideoContainer />
    </div>
  )
}

export default MainContainer