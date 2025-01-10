import  { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import FormField from './FormField'
import {motion} from 'framer-motion'
import { Loader } from 'lucide-react'
import { useProductStore } from '../context/useProductStore'
import { useNavigate, useParams } from 'react-router-dom'


function UpdateProject() {

// const [project, setProject] = useState([])
// const [title, setTitle] = useState([])
// const [description, setDescription] = useState([])
// const [targetAmount, settargetAmount] = useState([])
// const [ endDate, setEndDate] = useState([])

const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    target_amount: '', 
    end_date: '',
	});

const navigate = useNavigate();
// const newProduct = {
//     title,
//     description,
//     target_amount:targetAmount,
//     end_date:endDate,
//     image:project.image
// }

const {id} = useParams()
const { projects,updateProject, loading:isLoading } = useProductStore();



  useEffect(()=>{
  const findProject = projects.find(project => project._id === id)
  if(!findProject) return

  // setProject(findProject)
  setNewProduct(findProject)
  },[id,projects])


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await updateProject(id,newProduct);
           navigate('/')
		} catch {
			console.log("error creating a product");
		}
        console.log(newProduct)
	};

    // console.log(newProduct)

  return (
     <motion.div className="bg-slate-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"
    		initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
    >
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px]   rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-black">Update a Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">

       <label className="flex-1 w-full flex flex-col">
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Project Title *</span>
         <input 
          value={newProduct?.title}
          onChange={(e)=>setNewProduct({...newProduct,title:e.target.value})}
          type='text' 
          step="0.1"
          placeholder='Write a title'
          className=' block w-full py-[15px] sm:px-[25px] px-[15px] bg-white border
			 border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
            />
          </label>

        </div>
          <label className="flex-1 w-full flex flex-col">
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Description *</span>
        <textarea 
          value={newProduct?.description}
          // onChange={(e)=>setDescription(e.target.value)}
          onChange={(e)=>setNewProduct({...newProduct,description:e.target.value})}
          rows={10}
          placeholder='Write description'
          className='py-[15px] sm:px-[25px] px-[15px] block w-full  bg-white border
									 border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
                                      />
            </label> 
        <div className="flex flex-wrap gap-[40px]">
        
         <label className="flex-1 w-full flex flex-col">
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Goal *</span>
         <input 
          value={newProduct?.target_amount}
          onChange={(e)=>setNewProduct({...newProduct,target_mount:e.target.value})}
          // onChange={(e)=>settargetAmount(e.target.value)}
          type='text'
          placeholder='$1000'
          className=' block w-full py-[15px] sm:px-[25px] px-[15px] bg-white border
			 border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
            />
          </label>

          <label className="flex-1 w-full flex flex-col">
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">End Date *</span>
         <input 
          value={newProduct?.end_date}
          onChange={(e)=>setNewProduct({...newProduct,end_date:e.target.value})}
          // onChange={(e)=>setEndDate(e.target.value)}
          type='date'
          placeholder='End Date'
          className=' block w-full py-[15px] sm:px-[25px] px-[15px] bg-white border
			 border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm'
            />
          </label>
        </div>

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Update Project"
              styles="bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
            />
          </div>
      </form>
    </motion.div>
  )
}

export default UpdateProject