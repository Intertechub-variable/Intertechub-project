import React, { useEffect, useState } from 'react'
import { useProductStore } from '../context/useProductStore'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { formatDistance } from 'date-fns'

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

console.log(project)

  return (
    <div className=' mb-10'>
      <div className='flex justify-end items-center mx-10 my-10'>
      <button onClick={handleUpdate} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Update Project</button>
      </div>
      {loading ? <Loader/>:
      <div>
        <img src={project.image} alt={project.title} />
        <div>       
        </div>
      </div>
      }
    </div>
  )
}

export default ProductDetail