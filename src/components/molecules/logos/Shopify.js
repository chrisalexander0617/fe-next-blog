import React from 'react';
import Shopify from '../../atoms/imgs/shopify_logo.png';

export default function ShopifyLogo(){
    return (
        <>
            <div>
                <img className="object-contain  w-full" src={Shopify.src} alt="react" />
            </div>
        </>
    )
}