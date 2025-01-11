import { useEffect, useState } from 'react'
import { useProductStore } from '../context/useProductStore'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from 'lucide-react'

import { CampaignProgress } from './CampaignProgress'
import FundProject from './FundProject'


function ProductDetail() {



const [project, setProject] = useState({})
const navigate = useNavigate()

const {projects,loading} = useProductStore()
const {id} = useParams()

useEffect(()=>{
const findProject = projects.find(project => project._id === id)
if(!findProject) return

setProject(findProject)
},[id,projects])

  // const progress = project ? (project?.current_amount / project?.target_amount) * 100: 50;
  // const timeLeft = formatDistance(new Date(project?.end_date), new Date(), { addSuffix: true });
const handleUpdate = () =>{
navigate(`/update/${id}`)
}
 const progress = project ? (+project?.current_amount / +project?.target_amount) * 100: 50;


  return (
    <div className=' mb-10'>
      <div className='flex justify-end items-center mx-10 my-10'>
      <button onClick={handleUpdate} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Update Project</button>
      </div>
      {loading ? <Loader/>:
      <>
      <div className='detail flex justify-center gap-20 mx-20 container'>
        <img className='w-1/2' src={project.image} alt={project.title} />
        <div className='flex flex-col gap-10'> 
          <h1 className='text-3xl ' >{project.title}</h1> 
          <p>{project.description}</p>
          <CampaignProgress campaign={project}/>  
          
          { Math.round(progress) < 100 ? 
          <>
           <h1 className='text-2xl italic'>Please Fist log in to contribute</h1>
           <FundProject project={project} projectId={project._id} />
          </>:
          <div>
            <p className='text-2xl my-4 font-semibold'>Campaign has Ended</p>
            <h1 className='text-gray-500 italic'>Thankyou for your contribution</h1>
          </div>
          }  
 
        </div>
      </div>
      <div>
      </div>
      </>
      }
    </div>
  )
}

export default ProductDetail