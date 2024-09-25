import React, { useState } from 'react';

const useToggle = () => {
    const [value, setValue] = useState(false)
    const handleToggle =()=>{
        setValue(!value)
    }
    return  {
        value, 
        handleToggle
    }
};
export default useToggle;