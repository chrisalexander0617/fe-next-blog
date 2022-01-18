import React from 'react';

export default function SmallSpaceSection(props){
    return (
        <>
            <section className={`${props.bg}`}>
                <div className={`py-12 px-10`}>
                    {props.children}
                </div>
            </section>
        </>
    )
}