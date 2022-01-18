import React from 'react';
import StrapiImg from '../../atoms/imgs/strapi_logo.png';

export default function StrapiLogo(){
    return (
        <>
            <div>
                <img className="object-contain  w-full" src={StrapiImg.src} alt="react" />
            </div>
        </>
    )
}