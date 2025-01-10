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
import { useEffect } from 'react'
import { useUserStore } from './context/authContext'
import { Loader } from 'lucide-react'
import UpdateProject from './components/updateProject'
import ApproveProjects from './pages/ApproveProjects'



function App() {

 const {user,login,signup} = useUserStore()

 const { fetchAllProducts } = useProductStore();

 useEffect(()=>{
 signup()
 login()
	
 },[login,signup])

  useEffect(()=>{

	fetchAllProducts()

 },[])
 
console.log(user)

// if(checkingAuth) return <Loader/>
  return (
    <div>
      <BrowserRouter>
        <div className='bg-black w-full'>
            <Navbar/>
           </div>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={!user? <Signup /> : <Navigate to={'/'}/>} />
            {/* <Route path='/signup' element={<Signup/>}/> */}
            {/* <Route path='/login' element={<Signin/>}/> */}
            <Route path='/login' element={!user ? <Signin />:<Navigate to={'/'}/> } />
             <Route path='/products/:id' element={<ProductDetail/>}/>
              <Route path='/update/:id' element={<UpdateProject/>}/>
             <Route path='/products' element={<ProductList/>}/>
             <Route path='/create' element={<CreateProject/>}/>
             <Route path='/approve' element={<ApproveProjects/>}/>
         </Routes>
      </BrowserRouter>
         <Footer/>
    </div>
  )
}

export default App
