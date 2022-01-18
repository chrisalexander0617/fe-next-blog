import React from 'react';

export const WorkCard = props => {
    return (
        <>
            <div>
                <img className="
                w-full 
                object-cover 
                rounded-xl 
                mb-5 
                shadow-xl" 
                style={{
                    height:'300px', 
                    width:'100%'
                }} 
                src={props.src}/>
                <h3 className={`
                ${props.title_text_color} 
                    text-2xl 
                    font-bold`
                }>
                {props.title}
                </h3>
            </div>
        </>
    )
}