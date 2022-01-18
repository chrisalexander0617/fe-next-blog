import React from 'react';

export const Card = props => {
    return (
        <>
            <div className={`${props.bg_color} p-12 shadow-xl rounded-xl ${props.classes}`}>
                <h2 className={`${props.card_title_text_color} text-2xl mb-3 font-bold`}>{props.card_title}</h2>
                <div>
                    <p className={`${props.card_text_color } font-weight`}>{props.card_text}</p>
                </div>
            </div>
        </>
    )
}