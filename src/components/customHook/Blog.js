// import React, { useEffect, useRef } from 'react';
import useLinkNewTab from '../../hooks/useLinkNewTab';
const Blog = () => {
    const {a: domEntry} = useLinkNewTab();
    console.log("haha");
    return (
        <div>
            {console.log("haha2")}
            <div className='entry' ref={domEntry}>
                <p className='text-2xl'>lorem100, lorem100 lorem100 lorem100 <a href='https://google.com' className='underline'>gogogle</a> lorem100</p>
                <p className='text-2xl'>lorem100, lorem100 lorem100 lorem100 <a href='https://google.com' className='underline'>gogogle</a> lorem100</p>
                <p className='text-2xl'>lorem100, lorem100 lorem100 lorem100 <a href='https://google.com' className='underline'>gogogle</a> lorem100</p>
            </div>
        </div>
    );
};

export default Blog;