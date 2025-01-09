import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import { money } from '../assets';
// import { checkIfImage } from '../utils';
import Loader from '../components/Loader';
import CustomButton from '../components/CustomButton';
import FormField from '../components/FormField';
import { useProductStore } from '../context/useProductStore';
import { Upload } from 'lucide-react';

const CreateProject = () => {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    target_amount: '', 
    end_date: '',
    image: ''
	});

const { createProject, loading:isLoading } = useProductStore();


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProject(newProduct);
      navigate('/')
			// setNewProduct({ title: '',description: '',target_amount: '', end_date: '',image: '' });
		} catch {
			console.log("error creating a product");
		}
        console.log(newProduct)
	};

const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewProduct({ ...newProduct, image: reader.result });
			};
			reader.readAsDataURL(file); // base64
		}
	};
 
  return (
    <motion.div className="bg-slate-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"
    		initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
    >
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px]   rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-black">Create a Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          {/* <FormField 
            labelName="Your Name *"
            placeholder="Amanuel Tamirat"
            inputType="text"
            id='name'
						name='name'
            value={newProduct.name}
            handleChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          /> */}
          <FormField 
            labelName="Project Title *"
            placeholder="Write a title"
            inputType="text"
            id='title'
						name='title'
            value={newProduct.title}
            handleChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          />
        </div>

        <FormField 
            labelName="Description *"
            placeholder="Write description"
            isTextArea
            value={newProduct.description}
            handleChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />

        <div className="w-full flex justify-start items-center p-4 bg-black h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="$1000"
            inputType="text"
            value={newProduct.target}
            handleChange={(e) => setNewProduct({ ...newProduct, target_amount: e.target.value })}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={newProduct.end_date}
            handleChange={(e) => setNewProduct({ ...newProduct, end_date: e.target.value })}
          />
        </div>

        {/* <FormField 
            labelName="Project image *"
            placeholder="Place image URL of your project"
            inputType="url"
            value={newProduct?.image}
            handleChange={handleImageChange}
          /> */}
          <div className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='image'
						className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newProduct.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}
				</div>

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new Project"
              styles="bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
            />
          </div>
      </form>
    </motion.div>
  )
}

export default CreateProject