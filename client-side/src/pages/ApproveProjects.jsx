import { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { BASE_URL } from '../utils'
import { approveProject } from '../admin/Approve'
import {motion} from 'framer-motion'
function ApproveProjects() {
const [unapproved, setUnapproved] = useState([])

useEffect(()=>{
  const  getUnapprovedProject = async()=>{
    try {
       const response = await axios.get(`${BASE_URL}/api/projects/unapproved`)
       setUnapproved(response.data);
    } catch (error) {
      console.log(error)
    }
  } 
  getUnapprovedProject()
},[])

console.log(unapproved)



  return (
    <div className='h-screen m-20 flex flex-col gap-10'>
      <h1 className='text-3xl font-bold flex justify-center py-2'>Unapproved Projects</h1>
      {
        unapproved.map((project)=>{
          return (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
				      animate={{ opacity: 1, x: 0 }}
				      transition={{ duration: 0.8 }}
             key={project._id} className='flex justify-between  items-center'>
              <div className='flex gap-10 items-center'>
              <img className='w-40' src={project.image} alt={project.title}/>
                  <h1 className='text-xl font-semibold'>{project.title}</h1>
              </div>
              <div className='flex items-center '>
                <button onClick={()=>approveProject(project._id)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Approve</button>
              </div>
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default ApproveProjects