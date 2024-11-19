import React from 'react'
import { Search } from './Search'

const navbar = () => {
  return (
    <div>
      <div className=' sticky top-0 flex bg-teal-500 w-[99vw] h-14 justify-between items-center z-1'>
        <p className='text-gray-300 text-lg pl-2'>🍿Movies</p>
        <Search/>
        <button className='pr-2'>LogIn</button>
      </div>
    </div>
  )
}

export default navbar
