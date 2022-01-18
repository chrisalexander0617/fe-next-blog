import React from 'react';
import ReactImg from '../../atoms/imgs/react_logo.png';

export default function ReactLogo(){
    return (
        <>
            <div>
                <img className="object-contain  w-full" src={ReactImg.src} alt="react" />
            </div>
        </>
    )
}