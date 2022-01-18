import React from 'react';

export const Section = props => {
    return (
        <>
            <section className={`py-12 px-10 ${props.bg}`}>
                <div className={`py-12`}>
                    {props.children}
                </div>
            </section> 
        </>
    )
}