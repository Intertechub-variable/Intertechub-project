import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateProject from './pages/CreateProject'
import { useProductStore } from './context/useProductStore'
import { useEffect, useState } from 'react'
import { useUserStore } from './context/authContext'
import { Toaster } from "react-hot-toast";
import UpdateProject from './components/UpdateProject.jsx'
import AdminPage from './pages/AdminPage.jsx'
import axios from 'axios'



function App() {
const [search,setSearch] = useState('')
const [funded, setFunded] = useState([])
const [isLoading, setLoading] = useState(false)

 const {user} = useUserStore()


 const { projects,allProjects,fetchAllProducts,getAllProjects } = useProductStore();


useEffect(()=>{
  setLoading(true)
    const fundedProjects =  projects.filter((project)=>{
        if(project.current_amount >= project.target_amount){
            return project
        }
    })
    setLoading(false)
    setFunded(fundedProjects)
},[projects])


  useEffect(()=>{

	fetchAllProducts()
  getAllProjects()

 },[fetchAllProducts,getAllProjects])


// allProjects.map((projects)=>{
//   console.log(projects.donors)
// })

 useEffect(() => {
    const token = localStorage.getItem('authToken');
     
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className='bg-black w-full'>
            <Navbar onSearch ={setSearch}/>
           </div>
         <Routes>
            <Route path='/' element={<HomePage isLoading={isLoading} funded={funded}/>}/>
            <Route path='/signup' element={!user? <Signup /> : <Navigate to={'/'}/>} />
            <Route path='/login' element={!user ? <Signin />:<Navigate to={'/'}/> } />
             <Route path='/products/:id' element={<ProductDetail/>}/>
              <Route path='/update/:id' element={<UpdateProject/>}/>
             <Route path='/products' element={<ProductList search={search}/>}/>
              <Route path='/create' element={user ? <CreateProject />:<Navigate to={'/login'}/> } />
             <Route path='/admin' element={user? <AdminPage /> : <Navigate to={'/login'}/>} />
             {/* {user && <Route path='/approve' element={<ApproveProjects/>}/>} */}
             {/* user?.user?.role === 'admin' && */}
         </Routes>
      </BrowserRouter>
         <Footer/>
         <Toaster/>
    </div>
  )
}

export default App
