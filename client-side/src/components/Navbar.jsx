import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserStore } from "../context/authContext";

function Navbar() {

 const {user, logout} = useUserStore()


  return (
    <div className="z-50 flex mx-20 items-center  justify-between text-white pb-6 pt-6">
        <Link className="font-bold text-4xl border-none" to={'/'}>VARIABLE</Link>
        <div className="flex items-center relative">
            <FaSearch className="absolute right-5 text-black"/>
            <input className="block w-[200px] px-3 py-3  bg-gray-100 border border-gray-600 rounded-md shadow-sm
									 placeholder-gray-400 text-gray-700  focus:outline-none sm:text-sm" type="text" placeholder="Search for products" />
        </div>
        <div className="flex gap-6">
            <Link to={'/login'} className="uppercase">{user ? user?.user?.name ? user?.user?.name :user?.user?.email : "SIGN IN"}</Link>
            <Link to={'/signup'}>{!user && "GET STARTED"}</Link>
            <Link to={'/create'}>CREATE PROJECT</Link>
            <Link onClick={()=>logout()} to={'/'}>{user ? "SIGN OUT" : ""}</Link>
            <Link  to={'/approve'}>{user && "ADMIN"}</Link>
        </div>
    </div>
  )
}

export default Navbar