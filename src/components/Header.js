import React from 'react';

const Header = () => {
  return (
    <div className='grid grid-flow-col m-4'>
      <div className='flex'>
        <img alt='hamburger-menu-icon' src="/images/hamburger-menu.png" className='h-8' />
        <img alt='youtube-logo' src="/images/youtube-logo.png" className='h-8' />
      </div>
      <div>
        <input type="text" placeholder='Search' />
        <button>Search</button>
      </div>
      <div>
        <img alt="profile-user-icon" src="/images/profile-user.png" className='h-8' />
      </div>
    </div>
  )
}

export default Header;