import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  
  const openSidebar = () => {
    return setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    return setIsSidebarOpen(false)
  }
  const openSubmenu = () => {
    return setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    return setIsSubmenuOpen(false)
  }
  
  return <AppContext.Provider value={{isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}