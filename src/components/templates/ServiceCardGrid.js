import React from 'react';
import Grid from '../molecules/Grid'
import ServiceCard from '../molecules/cards/ServiceCard';


export default function ServiceCardsGrid(){
    return (
        <>
            <Grid grid_options="service-card-grid grid-cols-1 gap-10 md:grid-cols-3">
                <ServiceCard 
                    bg_color="bg-white"
                    card_title_text_color="text-grayt-800"
                    card_title="AI"
                    card_text_color="text-gray-800"
                    card_text="We build smart software that solves problems in multiple sectors" 
                />
                <ServiceCard 
                    bg_color="bg-white"
                    card_title_text_color="text-gray-800"
                    card_title="Headless Technology"
                    card_text_color="text-gray-800"
                    card_text="We build scalable software infrastructures that allows growth and flexibility at a low cost" 
                />
                <ServiceCard 
                    bg_color="bg-white"
                    card_title_text_color="text-gray-800"
                    card_title="Consulting"
                    card_text_color="text-gray-800"
                    card_text="We build scalable software infrastructures that allows growth and flexibility at a low cost" 
                />
            </Grid>
        </>
    )
};