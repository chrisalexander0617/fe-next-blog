import React from 'react';

export default function Grid(props){
    return (
        <>
           <div className={`flex items-center justify-center mx-auto py-5 md:container grid ${props.grid_options} ${props.bg}`}>
               {props.children}
           </div>
        </>
    )
};