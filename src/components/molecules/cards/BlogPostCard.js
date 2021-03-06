import React from 'react';

export const  BlogPostCard = props => {
    return (
        <>
            <div>
                <img className="w-full object-cover rounded-xl mb-5 shadow-xl" style={{height:'300px', width:'100%'}} src={`http://localhost:1337${props.img}`}/>
                <h3 className={`${props.title_text_color} text-3xl font-bold`}>{props.title}</h3>
            </div>
        </>
    )
}