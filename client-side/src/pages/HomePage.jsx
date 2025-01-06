import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Hero from '../components/Hero'
import img1 from '../images/random3.jpeg'
import img2 from '../images/random2.avif'
import img3 from '../images/random.jpg'
import FeaturedProducts from '../components/FeaturedProducts'
import RecentlyFundedProjects from '../components/RecentlyFundedProjects'


function HomePage() {
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        img1,
        img2,
        img3
    ];


     useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % images.length
            );
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [images.length]);


  return (
    <div>
        <div
         className=' relative -mt-20 background duration-700 delay-300' style={{backgroundImage:`url(${images[currentImageIndex]})`}}
         >
            <div className='mt-16 bg-gradient-to-b from-black to-black-200 h-20 w-full'></div>
            <Hero/>
        </div>
        <div className='bg-slate-100 py-10'>
          <FeaturedProducts/>
        </div>
        <div className='bg-slate-100 py-10'>
            <RecentlyFundedProjects/>
        </div>
    </div>
  )
}

export default HomePage