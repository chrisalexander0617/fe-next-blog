import React from 'react';
import StrapiImg from '../../atoms/imgs/strapi_logo.png';

export const  StrapiLogo = () => {
    return (
        <>
            <div>
                <img 
                    className="object-contain w-full" 
                    src={StrapiImg.src} 
                    alt="strapi" 
                />
            </div>
        </>
    )
}