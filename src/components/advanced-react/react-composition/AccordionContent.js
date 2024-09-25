import React, { Fragment } from 'react';
import { useAccordion } from './AccordionContext';

const AccordionContent = ({children}) => {
    const {value} = useAccordion()
    return (
        <Fragment>
            {value && <span className='inline-block mt-3 '>{children}</span>}
        </Fragment>
    );
};

export default AccordionContent;