import React from 'react';

export default function ProjectCard(props){
    return (
        <>
            <div>
                <img className="w-full object-cover rounded-xl mb-5 shadow-xl" style={{height:'300px', width:'100%'}} src={props.src}/>
                <h3 className="text-gray-900 text-2xl font-bold">Project Title</h3>
            </div>
        </>
    )
}