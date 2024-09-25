import React, { useState } from 'react';
import useToggle from './useToggle';
import { useAccordion } from './AccordionContext';

const AccordionHeader = ({header}) => {
  const {value, handleToggle} = useAccordion()
  return (
    <div onClick={handleToggle} className='p-2 text-xl font-normal border border-gray-200 cursor-pointer header'>{header} {value ? <span>-</span> : <span>+</span>}</div>
  );
};

export default AccordionHeader;