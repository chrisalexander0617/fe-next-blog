import React from 'react';
import MongoDBImg from '../../atoms/imgs/mongodb_logo.png';

export default function MongoLogo(){
    return (
        <>
            <div>
                <img className="object-contain  w-full" src={MongoDBImg.src} alt="react" />
            </div>
        </>
    )
}