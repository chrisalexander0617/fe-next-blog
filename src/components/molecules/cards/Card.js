import React from 'react';

<<<<<<< HEAD:src/components/molecules/cards/ServiceCard.js
export default function ServiceCard(props){
=======
export default function Card(props){
>>>>>>> b9be6970e8757da9f843e3cf9a45d2db9d656113:src/components/molecules/cards/Card.js
    return (
        <>
            <div className={`${props.bg_color} px-10 py-10 shadow-xl rounded-xl`}>
                <h2 className={`${props.card_title_text_color} text-2xl mb-3 font-bold`}>{props.card_title}</h2>
                <div>
                    <p className={`${props.card_text_color } font-weight`}>{props.card_text}</p>
                </div>
            </div>
        </>
    )
}