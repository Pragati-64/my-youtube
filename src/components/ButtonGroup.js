import React from 'react'
import Button from './Button'

const ButtonGroup = () => {

  const categoryList = ["All", "Music", "Mixes", "Trailers", "Movie musicals", "Comedy clubs", "Podcast", "Technology", "Finance", "Jukebox", "React", "Startups"]

  return (
    <div className='flex ml-5'>
      {
        categoryList.map((category)=>{
          return <Button category={category}/>
        })
      }
    </div>
  )
}

export default ButtonGroup