import React from 'react';

export function Grid(props){
    return (
        <>
           <div className={`py-5 mx-auto md:container flex items-center grid ${props.bg} ${props.bg}`}>
               {props.children}
           </div>
        </>
    )
};