import React from 'react';


const Cell = ({value,onClick,className}) => {
    return (
        <div className={`Board-Cell ${className}`} onClick={onClick}>
           {value}
        </div>
    );
};

export default Cell;