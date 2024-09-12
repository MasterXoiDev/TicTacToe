import { useEffect, useState } from "react";

export default function useDebounce(initialValue = null,delay = 1000) { 
    const [debouncevalue, setDebouncevalue] = useState(initialValue)
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncevalue(initialValue)
        },delay)
        return ()=>{
            clearTimeout(timer)
        }
    },[delay, initialValue])
    return debouncevalue
}

