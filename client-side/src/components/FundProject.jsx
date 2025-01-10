// src/components/FundProject.js
import React, { useState } from 'react';
import axios from '../utils/axios';
import {BASE_URL} from '../utils'

const FundProject = ({ projectId }) => {
  const [amount, setAmount] = useState('');

  const handleFund = async () => {
    if (amount <= 0) {
      alert('Amount must be greater than zero');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/projects/fund/${projectId}`, { amount });
      alert('Funding successful!');
    } catch (error) {
      alert('Error funding project: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to fund"
      />
      <button onClick={handleFund}>Fund Project</button>
    </div>
  );
};

export default FundProject;