import React from 'react';
import Grid from '../molecules/Grid'
import ServiceCard from '../molecules/cards/Card';

export default function ServiceCardsGrid(props){
    return (
        <> 
            <div className="text-center">
                <h2 className="text-gray-300 text-2xl mb-10">The stuff we do here</h2>
            </div>            
            <div className={`${props.bg}`}>
                <Grid grid_options="grid-cols-1 gap-10 md:grid-cols-3">
                    <ServiceCard 
                        bg_color="bg-gray-800"
                        card_title_text_color="text-green-300"
                        card_title="Software and Web Development"
                        card_text_color="text-gray-400"
                        card_text="We build scalable,  secure and usable software" 
                    />
                    <ServiceCard 
                        bg_color="bg-gray-800"
                        card_title_text_color="text-green-300"
                        card_title="API Design"
                        card_text_color="text-gray-400"
                        card_text="We build custom backends that fits your business model"
                    />
                    <ServiceCard 
                        bg_color="bg-gray-800"
                        card_title_text_color="text-green-300"
                        card_title="Consulting"
                        card_text_color="text-gray-400"
                        card_text="We help you build the proper software team to get your digital product on the market with minimal hiccups" 
                    />
                </Grid>
            </div>
        </>
    )
};