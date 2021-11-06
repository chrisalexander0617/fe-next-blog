import React from 'react';

function CardsGrid(props){
    return (
        <>
            <div className={`${props.bg} py-10 px-10`}>
                <div className={`py-5 mx-auto md:container flex items-center grid ${props.gridSizes}`}>
                    {props.children}
                </div>
            </div>
        </>
    )
};

export default CardsGrid;