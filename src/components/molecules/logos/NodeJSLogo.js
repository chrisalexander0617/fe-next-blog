import React from 'react';
import NodeJSImg from '../../atoms/imgs/nodejs_logo.png';

export const NodeJSLogo = () => {
    return (
        <>
            <div>
                <img 
                    className="object-contain w-full" 
                    src={NodeJSImg.src} 
                    alt="node js" 
                />
            </div>
        </>
    )
};