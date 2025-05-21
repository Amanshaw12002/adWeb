import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import Services from "./pages/Services.jsx"
import Contact from "./pages/Contact.jsx"
import Navbar from "./components/Navbar.jsx"
import { Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Auth from "./pages/Auth.jsx";

function App() {

  return (
    <>
    
    <main>
         <Navbar/>
         <Sidebar/>

         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/auth" element={<Auth/>}/>
         </Routes>
          <Footer/>
    </main>
    </>
  )
}

export default App
