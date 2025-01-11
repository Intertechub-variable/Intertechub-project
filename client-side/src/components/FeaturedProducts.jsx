import htmlReactParcer from 'html-react-parser'
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductStore } from "../context/useProductStore";
import { truncate } from "../utils";
import { LoaderIcon } from 'react-hot-toast';

function FeaturedProducts() {
const { projects , loading} = useProductStore()

  return (

    <div className="mx-20 container">
        <h1 className="flex justify-center p-5 text-4xl font-semibold">Featured Projects</h1>
        <div className="futured grid grid-cols-4 gap-5 ">
         { loading ? <div className=' flex justify-center items-center'><LoaderIcon style={{height:'100px', width:'100px'}}/></div> : projects.length ? projects.map((project)=>{
            return (
               <>
               <div key={project._id} className=" bg-white group">
                <Link to={`/products/${project._id}`} className="">
                <img className="h-40 w-full" src={project.image} alt={project.title} />
                <div className="p-5">
                   <p className="font-semibold text-xl">{project.title}</p>
                   <p className="py-2">{htmlReactParcer(String(truncate(project?.description,80)))}</p>
                </div>
                </Link>
                  <div className="flex gap-4 px-2">
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Ethiopia</span></p>
                   <p className="flex gap-2 items-center py-5 text-gray-400">Targert amount: ${project.target_amount}</p>
                   </div>
            </div>
            </>
            )      
         })
         :<div>No Projects Found </div>
         }
        </div>
        <div className="flex justify-center mt-5">
        <Link to={'/products'} className="text-gray-200 bg-blue-600 px-8 py-4 font-semibold rounded-md hover:bg-blue-800">View More</Link>
        </div>
    </div>
  )
}

export default FeaturedProducts