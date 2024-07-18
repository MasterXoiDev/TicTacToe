import React, { useState } from 'react';
import Board from './Board';
import "./Gamestyle.css";
import '../../helper';
import { calculateWinner } from '../../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9)
    .fill(null))
    const [isxNext, setIsxNext] = useState(true)
    const winner = calculateWinner(board)
    const handleClick = (index)=>{
        const boardcoppy = [...board]
        if(winner || boardcoppy[index])return;
        boardcoppy[index] = isxNext ? "X" : "O"
        setIsxNext(!isxNext)
        setBoard(boardcoppy)
    }
    const handleReset = ()=>{
        setBoard(Array(9)
        .fill(null))
        setIsxNext(true)
    }
    return (
        <div>
             <h1>{winner ? (`winner is ${isxNext ? 'O' : 'X'}`) : ""}</h1>
            <Board 
                cells={board}
                onClick={handleClick}
            >
            </Board>
           

            <button  className='Reset-game' onClick={handleReset}>Reset Game</button>
        </div>
    );
};

export default Game;