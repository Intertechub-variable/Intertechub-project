import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateProject from './pages/CreateProject'



function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='bg-black z-50'>
            <Navbar/>
           </div>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Signin/>}/>
             <Route path='/detail' element={<ProductDetail/>}/>
             <Route path='/products' element={<ProductList/>}/>
             <Route path='/create' element={<CreateProject/>}/>
         </Routes>
      </BrowserRouter>
         <Footer/>
    </div>
  )
}

export default App
