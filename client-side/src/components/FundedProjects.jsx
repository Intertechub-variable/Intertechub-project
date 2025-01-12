import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import htmlReactParcer from 'html-react-parser'
import { truncate } from "../utils";
import { LoaderIcon } from "react-hot-toast";
function FeaturedProducts({isLoading,funded}) {


  return (

    <div className="mx-20 container">
        <h1 className="flex justify-center mb-10 p-5 text-4xl font-semibold">Funded Projects</h1>
        <div className="futured grid grid-cols-3 gap-10">
         {isLoading ? <div className='flex justify-center items-center'><LoaderIcon style={{height:'100px', width:'100px'}}/></div> : funded.length ? funded.map((project)=>{
            return (
               <>
               <div key={project._id} className="bg-slate-100 group p-5">
                <Link to={`/products/${project._id}`} className="">
                <img className="h-40 w-full" src={project.image} alt={project.title} />
                <div className="p-5">
                   <p className="font-semibold text-xl">{project.title}</p>
                   <p className="py-2">{htmlReactParcer(String(truncate(project?.description,80)))}</p>
                </div>
                </Link>
                  <div className="flex justify-between gap-10 p-5 items-center">
                   <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Ethiopia</span></p>
                    <p className="text-gray-400 italic">Funded</p>
                   </div>
            </div>
            </>
            )
            
            
         })
         :<div>No Funded Projects Found </div>
         }
        </div>
        <div className="flex justify-center mt-5">
        
        </div>
    </div>
  )
}

export default FeaturedProducts