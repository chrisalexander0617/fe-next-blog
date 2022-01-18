import React from 'react';

export default function Grid(props){
    return (
        <>
<<<<<<< HEAD
           <div className={`py-5 mx-auto md:container flex items-center grid ${props.grid_options} ${props.bg} ${props.classes}` }>
=======
           <div className={`flex items-center justify-center mx-auto py-5 md:container grid ${props.grid_options} ${props.bg}`}>
>>>>>>> b9be6970e8757da9f843e3cf9a45d2db9d656113
               {props.children}
           </div>
        </>
    )
};