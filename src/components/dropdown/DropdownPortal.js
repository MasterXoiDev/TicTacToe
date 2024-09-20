
import { useState } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
const DropdownPortal = () => {
    const {domSelect, show , handleShow}= useClickOutSide()
    const [coords,setCoords] = useState({})
    const handleClick = (e)=>{
        console.log(domSelect.current.getBoundingClientRect());
        setCoords(domSelect.current.getBoundingClientRect())
            
    }
    return (
        <div className='m-20 relative w-[200px]' ref={domSelect}>
            <div className='w-full p-5 border border-gray-300 border-solid rounded-lg cursor-pointer' onClick={handleClick}>Selected</div>
            {show && <div className='absolute border border-gray-200 w-full max-w-[400px] rounded-lg w-full bg-white'>
                <div className='p-5 cursor-pointer '>javascript</div>
                <div className='p-5 cursor-pointer'>reactjs</div>
                <div className='p-5 cursor-pointer'>html/css</div>
            </div>}
        </div>
    );
};

export default DropdownPortal;