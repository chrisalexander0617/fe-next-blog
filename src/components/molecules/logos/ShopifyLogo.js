import React from 'react';
import Shopify from '../../atoms/imgs/shopify_logo.png';

export const ShopifyLogo = () => {
    return (
        <>
            <div>
                <img 
                    className="object-contain w-full" 
                    src={Shopify.src} 
                    alt="shopify" 
                />
            </div>
        </>
    )
}