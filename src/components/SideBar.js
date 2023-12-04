import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className='p-5 shadow-md'>

      <div>
        <ul>
          <Link to="/"><li className='flex'> <img src='/images/home.png' alt="home-icon" className='h-6 p-1'/>Home</li></Link>
          <li className='flex'> <img src='/images/clock.png' alt="clock-icon" className='h-6 p-1'/> Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div>
      <h1 className='font-bold pt-4'>You</h1>
        <ul>
          <li>Your channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
          <li>Show More</li>
        </ul>
      </div>
    <div>
    <h1 className='font-bold pt-4'>Subscriptions</h1>
      <ul>
        <li>Abdul Bari</li>
        <li>Aditya Verma</li>
        <li>Akshay Saini</li>
        <li>Applicaion Club</li>
      </ul>
    </div>

    <div>
    <h1 className='font-bold pt-4'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
      
    </div>
  )
}

export default SideBar