import React, { useState } from 'react';
import useHandleChange from '../../hooks/usehandleChange';

const Form = () => {
    // const [value,setValue] = useState({
    //     fullname: "",
    //     email: "",
    //     hobby: false
    // })
    const {value, handleChange} = useHandleChange({
            fullname: "",
            email: "",
            hobby: false
        })
    return (
        <div>
            
            <div className='m-10 w-40'>
                <input name='fullname' type='text' className='w-full w-max-[400px] border border-solid border-gray-500 p-2 rounded-lg' placeholder='your text' onChange={handleChange}></input>
                <input name="email" type="email" className='w-full w-max-[400px] border border-solid border-gray-500 p-2 rounded-lg' placeholder='your Email' onChange={handleChange}></input>
                <input type='checkbox' name='hobby' onChange={handleChange}></input>
            </div>
        </div>
    );
};

export default Form;