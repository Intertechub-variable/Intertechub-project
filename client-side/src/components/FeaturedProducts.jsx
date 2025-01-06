import { FaLocationArrow } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
function FeaturedProducts() {
  return (
    <div className="mx-20 ">
        <h1 className="flex justify-center p-5 text-4xl font-semibold">Featured Projects</h1>
        <div className="grid grid-cols-4 gap-5 ">
            <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
             <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
            <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
             <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
             <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
            <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
            <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
           <div className="bg-white">
                <Link to={'/detail'} className="">
                <img className="h-40 w-full" src="/images/random.jpg" alt="" />
                <div className="p-5">
                   <p className="font-semibold text-xl">SmartAir</p>
                   <p className="py-2">WiFi Smart unit conversion for the Modern Home</p>
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Atlanta</span></p>
                </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-center mt-5">
        <Link to={'/products'} className="text-gray-200 bg-blue-600 px-8 py-4 font-semibold rounded-md hover:bg-blue-800">View More</Link>
        </div>
    </div>
  )
}

export default FeaturedProducts