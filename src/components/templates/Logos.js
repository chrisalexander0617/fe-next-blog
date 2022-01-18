import React from 'react';

import Grid from '../molecules/Grid';
import ReactLogo from '../molecules/logos/React.js';
import MongoDBLogo from '../molecules/logos/MongoDB.js';
import BrainJSLogo from '../molecules/logos/BrainJS';
import StrapiLogo from '../molecules/logos/Strapi';
import ShopifyLogo from '../molecules/logos/Shopify';
import NodeJSLogo from '../molecules/logos/NodeJS'

export default function Logos(){
    return (
        <>
        <div className="text-center">
            <h2 className="text-gray-300 text-2xl mb-10">Technologies</h2>
        </div>
            <Grid grid_options="grid-cols-3 flex justify-center items-center gap-10 md:grid-cols-3 lg:grid-cols-6">
                <ReactLogo />
                <MongoDBLogo />
                <NodeJSLogo />
                <BrainJSLogo />
                <StrapiLogo />
                <ShopifyLogo />
            </Grid>
        </>
    )
};