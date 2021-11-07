import React, { useState } from 'react';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
  } from '@react-spring/web';
  
import Grid from '../molecules/Grid'
import ServiceCard from '../molecules/cards/ServiceCard';

export default function ServiceCardsGrid(props){
    return (
        <>              
        <div className={`${props.bg}`}>
            <Grid grid_options="grid-cols-1 gap-10 md:grid-cols-3">
                <ServiceCard 
                    bg_color="bg-gray-800"
                    card_title_text_color="text-green-400"
                    card_title="AI"
                    card_text_color="text-gray-200"
                    card_text="We build smart software that solves problems in multiple sectors" 
                />
                <ServiceCard 
                    bg_color="bg-gray-800"
                    card_title_text_color="text-blue-400"
                    card_title="Headless Technology"
                    card_text_color="text-gray-200"
                    card_text="We build scalable software infrastructures that allows growth and flexibility at a low cost" 
                />
                <ServiceCard 
                    bg_color="bg-gray-800"
                    card_title_text_color="text-white"
                    card_title="Consulting"
                    card_text_color="text-gray-200"
                    card_text="We build scalable software infrastructures that allows growth and flexibility at a low cost" 
                />
            </Grid>
        </div>
        </>
    )
};