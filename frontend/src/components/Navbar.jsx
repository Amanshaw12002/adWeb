
// Navbar.tsx
import { AlignJustify } from 'lucide-react';
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { useGlobalContext } from '../AppContext';

export default function Navbar() {
const {handleShowSidebar,user,showSidebar} = useGlobalContext();

  return (
    <nav className=" bg-white/30 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:justify-between justify-start h-16 items-center">
             
          <motion.div
  onClick={handleShowSidebar}
  initial={false}
  animate={{ rotate: showSidebar ? 180 : 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="cursor-pointer ml-2 p-1 h-8 w-8 sm:hidden hover:scale-110"
>
  <AlignJustify className="w-full h-full" />
</motion.div>
          
          <div className="flex  items-center ml-2">
            <span 
            className="text-3xl font-bold  text-blue-600"
            >MyBrand</span>

          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex   sm:text-lg md:text-xl items-center justify-center  space-x-6">
            <Link to='/'
            className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            {!user && <Link to='/auth' className='text-gray-700 border-none rounded-sm px-3 font-semibold text-md py-1 hover:text-white hover:bg-blue-500 '>
            Login</Link>}
          </div>
</div>     </div>
    </nav>
  );
}
