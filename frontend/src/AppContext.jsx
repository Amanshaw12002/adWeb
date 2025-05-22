import  {createContext,useContext, useState,useEffect } from 'react'
import api from './api/api';
import { useNavigate } from 'react-router-dom';
const AppContext = createContext();

export default function AppProvider({children}) {
  const [showSidebar,setShowSidebar] = useState(false);
  const [user,setUser] = useState(null);
  const navigate = useNavigate();
const handleLogout = async () => {
  try {
    await api.post("/user/logout", {}, { withCredentials: true });
    localStorage.removeItem("json");
    setUser(null); 
    navigate("/");
    handleShowSidebar();
  } catch (err) {
    console.error("Logout failed:", err);
  }
};



  const getUser = async () => {
  try {
    const res = await api.get("user/profile",{
withCredentials: true,
    });
      const data=localStorage.setItem("json", JSON.stringify(res.data));
    setUser(data);
    console.log(user);
   
   
  } catch (error) {
    console.error("Failed to fetch user profile", error);
  }
};
useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await api.get("/user/profile", { withCredentials: true });
      setUser(res.data);
      localStorage.setItem("json", JSON.stringify(res.data));
    } catch (err) {
      // fallback to localStorage
      const localUser = localStorage.getItem("json");
      if (localUser) {
        setUser(JSON.parse(localUser));
      }
    }
  };

  fetchUser();
}, [user]);


  const handleShowSidebar = (value) => {
  if (typeof value === "boolean") {
    setShowSidebar(value); 
  } else {
    setShowSidebar(prev => !prev); 
  }
};


  return (
    <>
    <AppContext.Provider value={{handleShowSidebar,handleLogout,showSidebar,getUser,user}}>
      {children}
    </AppContext.Provider>
    </>
  )
}

export const useGlobalContext = () => {
   return useContext(AppContext); 
}