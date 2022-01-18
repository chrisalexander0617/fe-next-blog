import React from 'react';
import { Grid } from '../molecules/Grid'
import { Card } from '../molecules/cards/Card';

export const Services = () => {
    return (
        <>
            <Grid grid_options="service-card-grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
                <Card 
                    bg_color="bg-gray-800"
                    card_title_text_color="text-gray-200"
                    card_title="Software Development"
                    card_text_color="text-gray-500"
                    card_text="We build software that function like native apps without the high costs and with faster development times" 
                />
                <Card 
                    bg_color="bg-gray-800"
                    card_title_text_color="text-gray-200"
                    card_title="Consulting"
                    card_text_color="text-gray-500"
                    card_text="Talk with expert engineers who knows how to plan low-cost development to get your digital product to the market ASAP
                    " 
                />
                <Card 
                    bg_color="bg-gray-800"
                    card_title_text_color="text-gray-200"
                    card_title="Integrations"
                    card_text_color="text-gray-500"
                    card_text="Build out customized endpoints to allow you to display your data exactly how you want" 
                />
            </Grid>
        </>
    )
};