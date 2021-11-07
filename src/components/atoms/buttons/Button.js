import React , { useState } from 'react';

export default function Button(props){
    return (
        <>
            <button className={`px-5 py-3 ${props.bg_color} rounded-full ${props.text_color} font-bold`}>{props.button_text}</button>
        </>
    ) 
}