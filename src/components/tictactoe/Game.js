import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./Gamestyle.css";
import '../../helper';
import { calculateWinner } from '../../helper';

const initialstate = {
    board: Array(9).fill(null), 
    isxNext: true
}
const gameReducer = (state,action)=>{
    switch (action.type) {
        case "CLICK":
       {
        const {board, isxNext} = state
        const {index, winner } = action.payload
        if(winner || board[index]) return state;
        const nextState = JSON.parse(JSON.stringify(state))
        nextState.board[index] = isxNext ? "X" : "O" 
        nextState.isxNext = !isxNext
        return nextState;
       }
        case "RESET":
        // {   
        //     const nextState = {
        //             board: Array(9)
        //             .fill(null),
        //             isxNext: true
        //         }
        //     return nextState
        // }
        return initialstate;
       
        default:
            break;
    }
    return state;
 
}
const Game = () => {
    
    const [state,dispatch] = useReducer(gameReducer,initialstate)
    const winner = calculateWinner(state.board)
    const handleClick = (index)=>{
        // const boardcoppy = [...state.board]
        // if(winner || boardcoppy[index])return;
        dispatch({
            type: "CLICK",
            payload:{
                winner,
                index,
            },
        })
    }
    const handleReset = ()=>{
        dispatch(
            {
                type: "RESET",
               
            }
        )
        // setState({
        //     board: Array(9)
        //     .fill(null),
        //     isxNext: true
        // })
    
    }
    return (
        <div>
             <h1>{winner ? (`winner is ${winner}`) : ""}</h1>
            <Board 
                cells={state.board}
                onClick={handleClick}
            >
            </Board>
            <button  className='Reset-game' onClick={handleReset}>Reset Game</button>
        </div>
    );
};

export default Game;