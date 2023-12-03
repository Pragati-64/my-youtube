import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const VideoPage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])

  return (
    <div>VideoPage</div>
  )
}

export default VideoPage;