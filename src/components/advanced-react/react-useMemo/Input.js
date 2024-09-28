import React, { useCallback, useMemo, useState } from 'react';
import Count from './Count';

const Input = () => {
    const [filter, setFilter] = useState()
    const dataTest = useCallback(()=>{
        setFilter("")
    },[setFilter])
    const data = useMemo(()=>({setData : false}),[filter])
    return (
        <div>
            <input onChange={(e)=>{setFilter(e.target.value)}} className='p-4 border border-gray-400' type="text" />
            <Count filter={dataTest} data={data}></Count>
        </div>
    );
}; 

export default Input;