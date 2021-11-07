import React from 'react';

export default function Grid(props){
    return (
        <>
           <div className={`py-5 mx-auto md:container flex items-center grid ${props.grid_options} ${props.bg}`}>
               {props.children}
           </div>
        </>
    )
};