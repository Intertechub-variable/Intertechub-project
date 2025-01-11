import { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { BASE_URL } from '../utils'
import { approveProject } from '../admin/Approve'
import {motion} from 'framer-motion'
import { useProductStore } from '../context/useProductStore'
import CustomButton from '../components/CustomButton'
function ApproveProjects() {
const [unapproved, setUnapproved] = useState([])
  const [showModal, setShowModal] = useState(false)

const {deleteProduct} = useProductStore()

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
    <div className='container h-screen m-20 flex flex-col gap-10'>
      <h1 className='text-3xl font-bold flex justify-center py-2'>Unapproved Projects</h1>
      {unapproved.length ?
        unapproved.map((project)=>{
          return (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
				      animate={{ opacity: 1, x: 0 }}
				      transition={{ duration: 0.8 }}
             key={project._id} className='shaka flex justify-between  items-center'>
              <div className='flex gap-10 items-center'>
              <img className='w-40' src={project.image} alt={project.title}/>
                  <h1 className='debik text-xl font-semibold'>{project.title}</h1>
              </div>
              <div className='btns flex items-center justify-center gap-5'>
                <button onClick={()=>{
                 setShowModal(true)
                }} className=" bg-red-500 hover:bg-red-700 w-full text-white ffont-bold py-2 px-4 rounded">Delete</button>
                <button onClick={()=>approveProject(project._id)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Approve</button>
                   {showModal &&
                <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
                 <div>
                  <h3 className='text-white'>Are you sure you want to delete this acount?</h3>
                <div className='flex gap-5 my-5'>
                  <button  className='bg-red-600 text-white p-2 rounded hover:bg-red-800'  onClick={ ()=>{
                  deleteProduct(project._id)
                  window.location.reload()
                  }
                  }>Yes, I'm sure</button>
                  <button className= 'text-white bg-green-400 p-2 rounded hover:bg-green-600'  onClick={()=>setShowModal(false)}>No, cancel</button>
                </div>
              </div>
              </div>
              }
              </div>
            </motion.div>
          )
        })
        :<div className='flex justify-center text-xl italic text-gray-400'>No Unapproved Projects Found!</div>
      }
    </div>
  )
}

export default ApproveProjects