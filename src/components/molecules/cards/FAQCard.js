import React from 'react';

const FAQCardStyles = {
    maxWidth:'100%',
    width:'600px'
};

export default function FAQCard(props){
    return (
        <>
            <div style={FAQCardStyles} className={`faq-card ${props.bg_color} px-10 my-5 py-5 shadow-xl rounded-xl`}>
                <h2 className={`${props.card_title_text_color} text-2xl mb-3 font-bold`}>{props.card_title}</h2>
                <div>
                    <p className={`${props.card_text_color } font-weight`}>{props.card_text}</p>
                </div>
            </div>
        </>
    )
};