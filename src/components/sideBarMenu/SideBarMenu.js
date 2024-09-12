import React from 'react';

const SideBarMenu = React.forwardRef((props,ref) => {
    return (
        <div ref={ref} className = {`transition-all w-[300px] bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 ${props.show ? "" : `-translate-x-full`}`}>
        </div>
    );
});

export default SideBarMenu