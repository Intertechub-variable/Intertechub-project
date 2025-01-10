import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useProductStore } from "../context/useProductStore";
// import { useEffect, useState } from "react";
import htmlReactParcer from 'html-react-parser'
import { truncate } from "../utils";
function FeaturedProducts({funded}) {


  return (

    <div className="mx-20">
        <h1 className="flex justify-center mb-10 p-5 text-4xl font-semibold">Funded Projects</h1>
        <div className="grid grid-cols-4 gap-5 ">
         {funded.length ? funded.map((project)=>{
            return (
               <>
               <div key={project._id} className="bg-white group">
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