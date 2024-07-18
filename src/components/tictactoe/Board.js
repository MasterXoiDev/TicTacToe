import React from 'react';
import Cell from './Cell';

const Board = (props) => {
    return (
        <div className='Game-Board'>
            {
                props.cells.map((item, index) => (
                <Cell 
                    key={index}
                    value={item}
                    onClick={()=>{props.onClick(index)}}
                ></Cell>
            ))}
        </div>
    );
};

export default Board;