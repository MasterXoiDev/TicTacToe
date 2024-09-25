import React, { useState } from 'react';
import useToggle from './useToggle';

const EditAble = () => {
    const { value : show, handleToggle } = useToggle()
    return (
        <div>
            {show && <input className='border border-gray-500' type="text" />}
            <button onClick={handleToggle} className='p-4 bg-blue-500'>Click</button>
        </div>
    );
};

export default EditAble;