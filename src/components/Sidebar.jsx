import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

export const Sidebar = () => {
  const { theme } = useAppContext()

  return (
    <div className="flex flex-col items-center justify-between h-screen w-72 bg-white border-r border-gray-200 p-6">

      {/* Logo Section */}
      <div className="w-full">
        <img
          src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark}
          alt="QuickGPT Logo"
          className="w-full"
        />
      </div>

      {/* New Chat Button */}
      <Link to="/" className="w-full">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 px-5 pt-5 pb-3 
               text-white bg-gradient-to-r from-[#A456F7] to-[#3D81F6] 
               hover:shadow-lg hover:shadow-[#A456F7]/50 
               rounded-lg font-semibold text-lg tracking-wide 
               transition-transform duration-200 active:scale-95"
        >
          <span className="text-2xl leading-none">+</span>
          <span>New Chat</span>
        </button>
      </Link>



      {/* Empty space - user can build their own content here */}
      <div className="flex-1"></div>

    </div>
  )
}

export default Sidebar
