import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SUGGESTIONS_API } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {

    const timer = setTimeout(() => getSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const getSuggestions = async () => {
    console.log(searchInput);
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchInput);
    const json = await data.json();
    setSearchSuggestions(json[1])
    // console.log(json[1]);
  }

  return (
    <div className='grid grid-flow-col m-4 pb-4 shadow-lg'>

      <div className='flex col-span-1'>
        <button onClick={() => toggleMenuHandler()} className='pb-4 pl-3'><img alt='hamburger-menu-icon' src="/images/hamburger-menu.png" className='h-6 w-5' /></button>

        <img alt='youtube-logo' src="/images/youtube-logo.png" className='h-6 ml-6' />
      </div>

      <div className='col-span-10 px-64 rounded-md'>
        <div>
          <input type="text" placeholder=' Search' className='w-1/2 border border-gray-700 p-2 rounded-l-full shadow-md px-5' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          <button className='bg-gray-300 w-20 h-10 p-2 rounded-r-full shadow-md'><img alt="search-icon" src="/images/search.png" className='h-5 ml-4' /></button>
        </div>

        <div className='fixed bg-white py-2 px-2 w-[27rem] shadow-lg border border-black-200 rounded-md'>
          <ul>
            {
              searchSuggestions.map((suggestion)=>
                <li key={suggestion} className='px-3 py-2 hover:bg-gray-200'> 🔍 {suggestion}</li>
              
              )
            }
          </ul>
        </div>

      </div>

      <div className='col-span-1'>
        <img alt="profile-user-icon" src="/images/profile-user.png" className='h-8' />
      </div>

    </div>
  )
}

export default Header;