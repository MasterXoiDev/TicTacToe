import React, { createContext, useContext } from 'react';
import useToggle from './useToggle';
import { type } from '@testing-library/user-event/dist/type';



const AccordionContext = createContext()

function AccordionProvider(props) {
    const {value, handleToggle} = useToggle()
    const values = {value, handleToggle}
    return <AccordionContext.Provider value={values} {...props}></AccordionContext.Provider>
}


function useAccordion(){
    const context = useContext(AccordionContext)

    if(typeof context === "undefined") 
        throw new Error.apply("please close your tag in provider")
    return context
}

export {useAccordion, AccordionProvider};