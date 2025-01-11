import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../context/authContext";
import { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from "./SidebarData";

function Navbar({onSearch}) {
const navigate = useNavigate()
 const [sidebar, setSidebar] = useState(false);


 const {user, logout} = useUserStore()

 
  const showSidebar = () => {
    setSidebar(!sidebar)
  };
const handleSearch = (e)=>{
   e.preventDefault();
   onSearch(e.target.value)
   navigate('/products')

}

  return (
    <div className="z-50 flex coiner mx-20 items-center  justify-between text-white pb-6 pt-6">

        <Link className="logo font-bold text-4xl border-none" to={'/'}>VARIABLE</Link>
        <div className="flex items-center relative">
            <FaSearch className="absolute right-5 text-black"/>
            <input onChange={(e)=>handleSearch(e)} className="block w-[200px] input px-3 py-3  bg-gray-100 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 text-gray-700  focus:outline-none sm:text-sm" type="text" placeholder="Search for projects" />
        </div>
        <div className="flex gap-6 links">
            <Link to={'/login'} className="uppercase">{user ? user?.user?.name ? user?.user?.name :user?.user?.email : "SIGN IN"}</Link>
            <Link to={'/signup'}>{!user && "GET STARTED"}</Link>
            <Link to={'/create'}>{user && "CREATE PROJECT"}</Link>
            <Link  to={'/approve'}>{user && "ADMIN"}</Link>
            <Link onClick={()=>logout()} to={'/'}>{user ? "SIGN OUT" : ""}</Link>
        </div>
                 <IconContext.Provider value={{ color: '#000000' }} className=''>
          <div className='hidden menu-var'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars size={30} color='black' onClick={showSidebar} className='text-black' />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={() =>{item.title === 'SIGN OUT' ? logout():null}} >
                      <span className='text-black'>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar