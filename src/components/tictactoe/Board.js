import React from 'react';
import Cell from './Cell';

const Board = ({onClick,cells}) => {
    return (
        <div className='Game-Board'>
            {
                cells.map((item, index) => (
                <Cell 
                    key={index}
                    value={item}
                    onClick={()=>{onClick(index)}}
                    className={item === 'X' ? "is-X" : item === "O" ? "is-O" : "" }
                ></Cell>
            ))}
        </div>
    );
};

export default Board;
