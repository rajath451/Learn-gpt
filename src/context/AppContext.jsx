import { createContext, use, useEffect } from "react";
import { assets } from "../assets/assets";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    

    const  navigate = useNavigate() 
    const [user, setUser] = useState(null)
    const [chats,setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null); 
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    
    const fetchUser = async () => {
        setUser(dummyUserData)
    }

    const fetchUsersChats = async (params) => {
        setChats(dummyChatsData)
        setSelectedChat(dummyChats[0])    
    }
    useEffect(() => {
        if(user){
            fetchUsersChats()
        }
        else{
            setChats([])
            setSelectedChat(null) //user chats are cleared when user logs out or is not logged in
        }

    },[user])

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')}
            else{ //theme is light so we remove the dark class from the document element
                document.documentElement.classList.remove('dark')
            }
    },[theme])

    useEffect(() => {
        fetchUser() //here we fetch the user and also dummy user in assets
    },[])


    const value = {
        navigate, user,setUser,fetchUser,chats,setChats,selectedChat,setSelectedChat,theme,setTheme 
    } // fetch of the contextdata from the assets and also the states and functions to update those states
    
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => useContext(AppContext)

