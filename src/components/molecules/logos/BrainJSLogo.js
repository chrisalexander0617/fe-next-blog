import React from 'react';
import BrainJSImg from '../../atoms/imgs/brainjs_logo.png';

export const BrainJSLogo = () => {
    return (
        <>
            <div>
                <img 
                    className="object-contain  
                    w-full" 
                    src={BrainJSImg.src} 
                    alt="brain js" 
                />
            </div>
        </>
    )
}