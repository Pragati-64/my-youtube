import React from 'react'

const Button = ({category}) => {
  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-200 rounded-md font-semibold'>{category}</button>
    </div>
  )
}

export default Button