import { createContext, useContext, useState } from "react"

const CounterContext = createContext()
const CounterProvider = (props)=>{
  const [count,setCount] = useState(1)
  return(
    <CounterContext.Provider value={[count,setCount]} {...props} ></CounterContext.Provider>
  )
}


function useCount(){
    const context = useContext(CounterContext)
    if(typeof context === "undefined"){
        throw new Error("useCount must be used")
    }
    return context
}

export {CounterProvider, useCount}