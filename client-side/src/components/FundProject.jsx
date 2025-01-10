// src/components/FundProject.js
import React, { useState } from 'react';
import axios from '../utils/axios';
import {BASE_URL} from '../utils/index'
import { useUserStore } from '../context/authContext';
import { Link } from 'react-router-dom';

const FundProject = ({ projectId,project }) => {
  const [amount, setAmount] = useState('');
const{user} = useUserStore()
  const handleFund = async () => {
    if (amount <= 0) {
      window.location.reload()
      // alert('Amount must be greater than zero');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/projects/fund/${projectId}`, { amount });
      alert('Funding successful!');
    } catch (error) {
      alert('Error funding project: ' + error.response.data.message);
    }
  };

  return (
    <div className='flex gap-5'>
      { !user ?
          <Link to={'/login'} className='bg-gray-100 py-2 px-4 rounded font-medium text-gray-500 hover:text-gray-400'>Login to Contribute to this Project</Link>:
<>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={`Enter amount (eg. ${project?.target_amount - project?.current_amount})`}
      />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleFund}>Fund Project</button>
      </>
      }
    </div>
  );
};

export default FundProject;