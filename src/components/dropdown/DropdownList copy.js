
import useClickOutSide from '../../hooks/useClickOutSide';
const DropdownList = () => {
    const {domSelect, show , handleShow}= useClickOutSide()
    return (
        <div className='m-20 relative w-[200px]' ref={domSelect}>
            <div className='cursor-pointer p-5 border border-solid border-gray-300 w-full rounded-lg' onClick={handleShow}>Selected</div>
            {show && <div className='absolute border border-gray-200 w-full max-w-[400px] rounded-lg w-full bg-white'>
                <div className='p-5 cursor-pointer '>javascript</div>
                <div className='p-5 cursor-pointer'>reactjs</div>
                <div className='p-5 cursor-pointer'>html/css</div>
            </div>}
        </div>
    );
};

export default DropdownList;