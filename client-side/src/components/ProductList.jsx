import htmlReactParcer from 'html-react-parser'
import { useProductStore } from '../context/useProductStore';
import { FaMapMarker } from 'react-icons/fa';
import { truncate } from '../utils';
import { Link } from 'react-router-dom';
import { CampaignProgress } from './CampaignProgress';

const ProductList = ({search}) => {
   const {projects} = useProductStore()


    return (
        <div className="mx-20 screen container">
        <h1 className="flex justify-center p-5 text-4xl font-semibold">Projects List</h1>
        <div className="futured grid grid-cols-4 gap-5 ">
         {projects.length > 0 ? projects.filter((project)=>{
              return search.toLowerCase() === '' ? project :  project.title.toLowerCase().includes(search.toLowerCase())
            }).map((project)=>{
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
                  <div className="flex justify-between gap-10 p-5">
                    <CampaignProgress campaign={project}/> 
              
                   </div>
            </div>
            </>
            )
            
            
         })
         :<div>No Projects Found </div>
         }
        </div>
        <div className="flex justify-center mt-5">
    </div>
    </div>
    )
};

export default ProductList;