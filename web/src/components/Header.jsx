import React from 'react'
import Place from './Place'
import SearchBar from './SearchBar'
import Settings from './Settings'

const Header = () => {
  return (
    <div className='flex items-center justify-around relative h-16 bg-white dark:bg-[#242526]'>
        <Place/>
        <SearchBar/>
        <Settings/>
    </div>
  )
}

export default Header