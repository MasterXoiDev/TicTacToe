import React from 'react';
import { useState } from 'react';
import './ToggleStyle.css'
const Toggle = () => {
    const [on,SetOn] = useState(false)
    const handleToggle = ()=>{
        SetOn(on=>!on)
    }
        return (
        <div>
            <div className={`Toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`Spinner ${on ? "active" : ""}`}></div>
            </div>
            
        </div>
    );
};

export default Toggle;