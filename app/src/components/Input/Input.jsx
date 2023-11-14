import './Input.css'
import React, { useState } from 'react';

const Input = ({ onSubmit }) => {
    const [pincode, setPincode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(pincode);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
            />
            <button className='search-button' type="submit">Search</button>
        </form>
    );
};

export default Input;
