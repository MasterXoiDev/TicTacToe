import { useState } from "react"

export default function useHandleChange(initialState){
    const [value,setValue] = useState(initialState)
    const handleChange = (e)=>{
        const type = e.target.type
        setValue({
            ...value,
            [e.target.name] : type === "checkbox" ? e.target.checked : e.target.value
        })
    }
    return{
        value,
        handleChange
    }

}