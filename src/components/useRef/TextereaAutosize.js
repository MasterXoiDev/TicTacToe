import React, { useEffect, useRef, useState } from 'react';
import lodash from "lodash"
const TextereaAutosize = () => {
    const [text,setText] = useState("")
    const textArea = useRef(null)
    const [areaHeigh, setAreaHeigh] = useState("auto")
    const handleText = (e)=>{
        setText(e.target.value)
        setAreaHeigh("auto")
        
    }

    useEffect(()=>{
        setAreaHeigh(`${textArea.current.scrollHeight}px`)
    },[text])
    return (
        <div className='p-5'>
            <textarea ref={textArea} onChange={handleText} className='transition-all p-5 border border-gray-500 border-solid overflow-hidden rounded-lg resize-none leading-normal w-full max-w-[400px]' placeholder='Demo' value={text} style={{
                height: areaHeigh
            }}></textarea>
        </div>
    );
};

export default TextereaAutosize;
