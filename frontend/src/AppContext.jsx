import React, { createContext,useContext, useState } from 'react'


const AppContext = createContext();

export default function AppProvider({children}) {
  const [showSidebar,setShowSidebar] = useState(false);
  const handleShowSidebar = (value) => {
  if (typeof value === "boolean") {
    setShowSidebar(value); 
  } else {
    setShowSidebar(prev => !prev); 
  }
};


  return (
    <>
    <AppContext.Provider value={{handleShowSidebar,showSidebar}}>
      {children}
    </AppContext.Provider>
    </>
  )
}

export const useGlobalContext = () => {
   return useContext(AppContext); 
}