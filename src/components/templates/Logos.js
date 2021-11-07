import React from 'react';
import Grid from '../molecules/Grid';
import ReactLogo from '../molecules/logos/React.js';
import MongoDBLogo from '../molecules/logos/MongoDB.js';
import BrainJSLogo from '../molecules/logos/BrainJS';
import StrapiLogo from '../molecules/logos/Strapi';
import ShopifyLogo from '../molecules/logos/Shopify';

export default function Logos(){
    return (
        <>
            <Grid grid_options="grid-cols-2 gap-10 md:grid-cols-5">
                <ReactLogo />
                <MongoDBLogo />
                <BrainJSLogo />
                <StrapiLogo />
                <ShopifyLogo />
            </Grid>
        </>
    )
}