import React from 'react';
import MongoDBImg from '../../atoms/imgs/mongodb_logo.png';

export const MongoDBLogo = () => {
    return (
        <>
            <div>
                <img 
                    className="object-contain w-full" 
                    src={MongoDBImg.src} 
                    alt="mongo db" 
                />
            </div>
        </>
    )
}