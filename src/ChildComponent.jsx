import React, { useState } from 'react';

const ChildComponent = ({ onData }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleClick = () => {
    onData(inputData); // Pass the data to the parent component through the callback function
  };

  return (
    <div>
      <input type="text" value={inputData} onChange={handleChange} />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
