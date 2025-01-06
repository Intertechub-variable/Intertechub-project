import  { useEffect, useState } from 'react';
import axios from 'axios';
import { CampaignProgress } from './CampaignProgress';

const ProductList = () => {
    const [projects, setProjects] = useState([
        {
            id:1,
            title:'Project-1',
            description:'Description-1',
             current_amount:50,
            target_amount:100,
            end_date:new Date()
        },
         {
            id:2,
            title:'Project-2',
            description:'Description-1',
           current_amount:100,
            target_amount:500,
            end_date: new Date()
        },
         {
            id:4,
            title:'Project-3',
            description:'Description-1',
            current_amount:100,
            target_amount:100,
            end_date:new Date()
        }
    ]);

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const response = await axios.get('/api/projects');
    //         setProjects(response.data);
    //     };
    //     fetchProjects();
    // }, []);

    return (
        <div className='h-screen'>
            <div className='mx-20 my-10'>            
            <h1>Projects</h1>
            <ul className='grid grid-cols-2 gap-20'>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.title} - Raised: ${project.current_amount} / Goal: ${project.target_amount}
                        <CampaignProgress campaign={project}/>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default ProductList;