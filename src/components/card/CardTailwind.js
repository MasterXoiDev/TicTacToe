import React from 'react';

const CardTailwind = (props) => {
    const title = `text-black text-2xl font-semibold ${props.title2 ? 'bg-[#ccc]' :  'bg-black'}`
    return (
        <div className='relative'>
        <div className=' w-full rounded-lg h-[400px]'>
            <img className='block w-full h-full object-cover rounded-lg' src='https://cdn.dribbble.com/userupload/15691805/file/original-925419340784d350019770f349fad62c.png?resize=400x300&vertical=center'></img>
        </div>
        <div className='absolute  left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]'>
            <div className='flex justify-between items-center mb-8'>
                <div className='flex items-center gap-x-3'>
                    <img className='w-8 h-9 rounded-full object-cover flex-shrink-0' src='https://cdn.dribbble.com/userupload/15691805/file/original-925419340784d350019770f349fad62c.png?resize=400x300&vertical=center'>
                    </img>
                    <span className='font-light text-base text-[#333]'>@zndrson</span>
                </div>
                <div className='flex justify-around'>
                    <img src='/icon-heart.svg'></img>
                    <span>256</span>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className={title}>Cosmic Perspective</h3>
                <span className={`text-lg font-bold text-transparent bg-primary-color bg-clip-text ${props.title3 ? 'text-gray-700' : "" }`}>12,000 PSL</span>
            </div>
        </div>
    </div>
    );
};

export default CardTailwind;