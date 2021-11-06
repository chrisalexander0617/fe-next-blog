import React from 'react';

function ServiceCard(props){
    return (
        <>
            <div className={`${props.bgColor} px-10 py-10 shadow-xl rounded-xl`}>
                <h2 className={`${props.cardTitleColor} text-2xl mb-3 font-bold`}>{props.cardTitle}</h2>
                <div>
                    <p className={`${props.CardTextColor } text-gray-400 font-weight`}>{props.cardText}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;