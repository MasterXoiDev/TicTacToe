import React from 'react';
import { useGalary } from '../../contexts/GalaryContext';

const CardList = () => {
    const { cardItems, removeCart } = useGalary()

    console.log(cardItems.url);
    console.log(cardItems);

    return (
        <div className='p-5'>
            {cardItems.length > 0 && cardItems.map(item => (
                <div key={item.id} className='flex gap-10 p-2'>
                      <img className='object-cover w-10 h-10 rounded-full' src={item.url} alt="" />
                      <button onClick={()=>{removeCart(item.id)}} className='p-5 font-semibold text-white bg-red-500 rounded-lg'>Delete</button>
                </div>
                ))
            }
        </div>
    );
};

export default CardList;