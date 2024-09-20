import React from 'react';
import {createPortal} from "react-dom";



let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
    const creatModal = document.createElement("div");
    creatModal.id = "modal-root";
    document.body.appendChild(creatModal);
    modalRoot = creatModal;
}
const Modal = ({open , handleClose = ()=>{}}) => {
    
    
    return createPortal(
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${open ? "" : "opacity-0 invisible"}`}>
            <div onClick={handleClose} className='absolute inset-0 bg-black bg-opacity-25 overlay'></div>
            <div className='relative z-10 w-full p-10 bg-white rounded-lg modal-content max-w-[482px]'>
                <span onClick={handleClose} className='absolute top-0 right-0 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4 z-100'>
                <i class="fa-solid fa-circle-xmark text-4xl text-[#ffffff] "></i></span>
                <h2 className='mb-5 text-4xl font-semibold text-center text-black'>Welcome Back!</h2>
                <div className="flex flex-col gap-5">
                    <label htmlFor="email" className='text-sm cursor-pointer'>email</label>
                    <input type="text" className='w-full p-4 text-sm leading-normal rounded-lg bg-[#E7ECF3]' placeholder='Enter your email' />
                </div>
                <div className="flex flex-col gap-5 mt-4">
                    <label htmlFor="password" className='text-sm cursor-pointer'>password</label>
                    <input type="password" className='w-full p-4 text-sm leading-normal rounded-lg bg-[#E7ECF3]' placeholder='Enter your password' />
                </div>
                <button className='w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg mt-10'>Sigh In</button>
            </div>
        </div>
        
    );
};

export default Modal;

