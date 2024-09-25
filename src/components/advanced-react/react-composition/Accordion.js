import React from 'react';

import AccordionContent from './AccordionContent';
import { AccordionProvider } from './AccordionContext';
import AccordionHeader from './AccordionHeader';

const Accordion = ({ header, children }) => {

    return (
        <AccordionProvider>
            <div className='max-w-[300px] mx-auto mt-10'>
                <AccordionHeader header={header}></AccordionHeader>
                <AccordionContent>{children}</AccordionContent>
            </div>
        </AccordionProvider>
    );
};

export default Accordion;