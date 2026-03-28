import React, { use } from 'react'
import { useAppContext } from '../context/AppContext'

export const Sidebar = () => {

  const {chats,setSelectedChat,theme,setTheme,user} = useAppContext() //here we can use the context to get the user data and also the chats data to display in the sidebar
  const [search,setSearch] = useState('')

  return (
      <div>
        {/* Logo */}
       <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt="" /> 
      </div>
  )
}
export default Sidebar