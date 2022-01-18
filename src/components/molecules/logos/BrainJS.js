import React from 'react';
import BrainJSImg from '../../atoms/imgs/brainjs_logo.png';

export default function BrainLogo(){
    return (
        <>
            <div>
                <img className="object-contain  w-full" src={BrainJSImg.src} alt="react" />
            </div>
        </>
    )
}