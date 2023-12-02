import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const handleSideBarMenu = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col m-4 p-4 shadow-lg'>

      <div className='flex col-span-1'>
        <button onClick={()=>handleSideBarMenu()}><img alt='hamburger-menu-icon' src="/images/hamburger-menu.png" className='h-8' /></button>
        
        <img alt='youtube-logo' src="/images/youtube-logo.png" className='h-8 ml-4' />
      </div>

      <div className='flex col-span-10 px-64 rounded-md'>
        <input type="text" placeholder=' Search' className='w-1/2 border border-gray-700 p-2 rounded-l-full shadow-md' />
        <button className='bg-gray-300 border border-black-200 w-20 p-2 rounded-r-full shadow-md'><img alt="search-icon" src="/images/search.png" className='h-5 ml-4 mt-1'/></button>
      </div>

      <div className='col-span-1'>
        <img alt="profile-user-icon" src="/images/profile-user.png" className='h-8' />
      </div>

    </div>
  )
}

export default Header;