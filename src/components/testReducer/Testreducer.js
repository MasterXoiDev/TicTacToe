import React, { useRef, useState } from 'react';

const Testreducer = () => {
    // const initState = 0
    // const DOWN_ACTION = "down"
    // const UP_ACTION = "up"



    
    // const reducer = (state, action) =>{
    //     switch(action){
    //         case DOWN_ACTION: 
    //             return state + 1 
    //         case UP_ACTION: 
    //             return state - 1 
    //         default:
    //             throw new Error("invalid") 
    //     }
    // }

    // const [count,dispatch] = useReducer(reducer,initState)


    const [count,setCount] = useState(60)
    const Timer = useRef()
    const prevCount = useRef()
    let preCount = useRef()
    React.useEffect(()=>{
        prevCount.current = count
    },[count])
    const handleStart = ()=>{
        Timer.current = setInterval(()=>{
            setCount(precount => precount - 1)
        },1000)
    }

    const handleStop = ()=>{
        clearInterval(Timer.current)
    }

    console.log(count,prevCount.current);
    
    return (
        <div className='w-10 mx-auto'>
            <span className='text-center text-5xl ml-14'>{count}</span>
            <div className='flex'>
                <button onClick={handleStart} className='bg-green-500 p-5 rounded-xl text-4xl'>start</button>
                <button onClick={handleStop} className='bg-red-500 p-5 rounded-xl text-4xl'>stop</button>
            </div>


        
        </div>
    );
};

export default Testreducer;