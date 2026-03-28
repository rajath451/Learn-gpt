/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUserData, dummyChats } from "../assets/assets";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(dummyUserData);
    const [chats, setChats] = useState(dummyChats);
    const [selectedChat, setSelectedChat] = useState(dummyChats[0] || null);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const value = {
        navigate,
        user,
        setUser,
        chats,
        setChats,
        selectedChat,
        setSelectedChat,
        theme,
        setTheme,
    } // fetch of the contextdata from the assets and also the states and functions to update those states
    
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext)

