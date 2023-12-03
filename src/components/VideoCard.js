import React from 'react'

const VideoCard = ({info}) => {
  
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  const {viewCount} = statistics;

  return (
    <div className='p-2 m-2 w-80 shadow-md'>
      <div>
        <img alt="thumbnail" src={thumbnails.medium.url} className='rounded-lg'/>
      </div>

      <div>
        <h3 className='font-bold py-2'>{title}</h3>
        <h3>{channelTitle}</h3>
        <h3>{viewCount} views</h3>

        
      </div>
    </div>
  )
}

export default VideoCard;