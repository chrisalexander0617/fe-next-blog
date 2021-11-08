import React from 'react';
import Grid from '../molecules/Grid';
import FAQCard from '../molecules/cards/FAQCard';

export default function FAQ(){
    return (
        <>  
            <div className="faq">
                <div className="text-center my-10">
                    <h2 className="text-white text-4xl font-bold mb-5">FAQ.</h2>
                    <p className="text-gray-400 mb-5">This is our faq section yp</p> 
                </div>
                <div className="flex justify-center items-center flex-col">
                    <FAQCard 
                        bg_color="bg-gray-800" 
                        card_title_text_color="text-green-300"
                        card_title="How much do your services cost?"
                        card_text_color="text-gray-400"
                        card_text="It depends on your requirements. Software development is like buildng a house. Price will vary depending on size, complexity, location and materials."
                    />
                    <FAQCard 
                        bg_color="bg-gray-800" 
                        card_title_text_color="text-green-300"
                        card_title="What technologies do you work with?"
                        card_text_color="text-gray-400"
                        card_text="We work with React, MongoDB and Node. We also work with various of other NPM libraries as well. Too many to count."
                    />
                    <FAQCard 
                        bg_color="bg-gray-800" 
                        card_title_text_color="text-green-300"
                        card_title="Will you work with my industry?"
                        card_text_color="text-gray-400"
                        card_text="We work in various industries and businesses large and small. We specialize in eCommerce and health but we also work with other industries as well. 
                        We do meet-and-greets with new potential clients to make sure we understand their problems(s) and to see if we are a great fit.
                        "
                    />
                </div>
            </div>
        </>
    )
}