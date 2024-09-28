import React, { useMemo } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Count = React.memo(({filter}) => {
    const [count, setCount] = useState(0)
    const useref = useRef(0)
    return (
        <div>
            <p className='font-[20px]'>Count: {count}</p>
            <p className='font-[20px]'>useRef: {useref.current++}</p>
           <button onClick={()=>{setCount(count + 1)}} className='p-4 text-white bg-blue-400'>inCrement</button> 
        </div>
    );
});

export default Count;