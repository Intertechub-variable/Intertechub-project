import  { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import FormField from './FormField'
import {motion} from 'framer-motion'
import { Loader } from 'lucide-react'
import { useProductStore } from '../context/useProductStore'
import { useNavigate, useParams } from 'react-router-dom'


function UpdateProject() {

const [project, setProject] = useState("")
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [targetAmount, settargetAmount] = useState("")
const [ endDate, setEndDate] = useState("")

  const navigate = useNavigate();
// const [newProduct, setNewProduct] = useState({
//     title: '',
//     description: '',
//     target_amount: '', 
//     end_date: '',
// 	});

const newProduct = {
    title,
    description,
    target_amount:targetAmount,
    end_date:endDate,
    image:project.image
}

const {id} = useParams()
const { projects,updateProject, loading:isLoading } = useProductStore();



useEffect(()=>{
const findProject = projects.find(project => project._id === id)
if(!findProject) return

setProject(findProject)
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

    console.log(project)

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
          <FormField 
            labelName="Project Title *"
            placeholder="Write a title"
            inputType="text"
            id='title'
			name='title'
            value={project.title || []}
            // handleChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            handleChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <FormField 
            labelName="Story *"
            placeholder="Write description"
            isTextArea
            value={project.description}
            // handleChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            handleChange={(e)=>setDescription(e.target.value)}
          />

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="$1000"
            inputType="text"
            value={project.target_amount}
            // handleChange={(e) => setNewProduct({ ...newProduct, target_amount: e.target.value })}
            handleChange={(e)=>settargetAmount(e.target.value)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={project.end_date}
            // handleChange={(e) => setNewProduct({ ...newProduct, end_date: e.target.value })}
            handleChange={(e)=>setEndDate(e.target.value)}
          />
        </div>
          {/* <div className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='image'
						className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newProduct.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}
				</div> */}

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