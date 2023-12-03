import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const VideoPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    useEffect(()=>{
        dispatch(closeMenu());
    },[])

  return (
    <div className='pt-4 pl-20'>
        <iframe className='rounded-lg' width="1100" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoPage;