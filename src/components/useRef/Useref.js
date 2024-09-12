import React, { useEffect, useRef } from 'react';

const Useref = () => {
    const inputRef = useRef()
    console.log(inputRef.current);
    useEffect(()=>{
        if(inputRef.current) inputRef.current.focus()
        inputRef.current.style.backgroundColor = "red"
        console.log(inputRef.current);
    },[])
    return (
        <div>
            <textarea ref={inputRef} className='p-5 bg-blue-500 border border-solid border-red-600 border-4 resize-none' placeholder='autofocus'></textarea>
        </div>
    );
};

export default Useref;