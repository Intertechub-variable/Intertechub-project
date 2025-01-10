import htmlReactParcer from 'html-react-parser'
import { useProductStore } from '../context/useProductStore';
import { FaMapMarker } from 'react-icons/fa';
import { truncate } from '../utils';
import { Link } from 'react-router-dom';
import { CampaignProgress } from './CampaignProgress';

const ProductList = ({search}) => {
   const {projects} = useProductStore()

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const response = await axios.get('/api/projects');
    //         setProjects(response.data);
    //     };
    //     fetchProjects();
    // }, []);

    return (
        <div className="mx-20 screen">
        <h1 className="flex justify-center p-5 text-4xl font-semibold">All Projects</h1>
        <div className="grid grid-cols-4 gap-5 ">
         {projects.length ? projects.filter((project)=>{
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
                   {/* <p className="flex gap-2 items-center py-5 text-gray-400"><FaMapMarker size={10}/> <span>Ethiopia</span></p> */}
                    <CampaignProgress campaign={project}/> 
                {/* <button onClick={()=>{
                  deleteProduct(project._id)
                  window.location.reload()

                }} className="hidden group-hover:block bg-red-500 hover:bg-red-700 w-full text-white font-bold py-0.5 px-2 rounded">Delete</button> */}
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