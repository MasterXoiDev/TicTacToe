import { useEffect, useRef } from "react";

export default function useLinkNewTab(){
    const domEntry = useRef(null)
    console.log("haha3");
    
    useEffect(()=>{
      if(domEntry){
        const link =  domEntry.current.querySelectorAll("a")
        console.log(link);
        link.lenght > 0  &&  link.forEach(item => item.setAttribute("target","_blank"))
    }
    },[])
    return {
        a: domEntry,
    }
}