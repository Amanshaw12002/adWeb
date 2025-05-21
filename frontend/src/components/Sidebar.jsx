import { useGlobalContext } from "../AppContext"
import {motion} from "framer-motion"

import {Link} from 'react-router-dom'



export default function Sidebar() {
  const {showSidebar,handleShowSidebar} = useGlobalContext();
 


 
  return (
    <>
   <motion.aside
   
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: showSidebar ? 0 : -200, opacity: showSidebar ? 1 : 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 50 }}
  className="fixed flex flex-col z-60 top-0 left-0 h-full w-54  bg-white text-black p-6"
>
      <div className="space-y-4  text-xl ">
        <div onClick={handleShowSidebar} className="border-none w-18 cursor-pointer text-black rounded-2xl px-3 py-1 text-lg hover:bg-[#007FFF] hover:text-white">Close</div>
        <Link to='/auth' onClick={handleShowSidebar} className="block border-[#1CA7EC] text-xl text-white border bg-[#008080] text-center hover:bg-[#007FFF] hover:text-white p-2 rounded-xl">Login</Link>
        <Link to="/" onClick={handleShowSidebar} className="block  hover:bg-[#007FFF] hover:text-white p-2 rounded-xl">Home</Link>
        <Link to="/contact" onClick={handleShowSidebar} className="block hover:bg-[#007FFF] hover:text-white p-2 rounded-xl">Contact</Link>
        <Link to="/service" onClick={handleShowSidebar} className="block hover:bg-[#007FFF] hover:text-white p-2 rounded-xl">Service</Link>
        <Link to='/about' onClick={handleShowSidebar} className="block hover:bg-[#007FFF] hover:text-white p-2 rounded-xl">About</Link>
      </div>
    </motion.aside>
   {showSidebar && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
        />
      )}
                  
    </>
  )
}
