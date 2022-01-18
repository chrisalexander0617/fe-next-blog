import React from 'react';

export const TextInput = props => {
    return (
        <>
            <div>
                <div className="mb-5">
                     <label className="text-gray-300 text-xl">{props.label_title}</label>
                </div>
                <input onKeyUp={props.handleChange} 
                className="
                    px-4 
                    py-5 
                    w-full 
                    bg-gray-800 
                    rounded-lg 
                    shadow-lg 
                    text-gray-200" 
                    type="text" 
                    placeholder={props.placeholder} 
                />
            </div>
        </>
    )
}