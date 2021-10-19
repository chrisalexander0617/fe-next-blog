import React from 'react';
import styles from '../../../../styles/Global.module.css';
import MainNav from '../../MainNav'

function GeneralHeader(props){
    return (
        <>
            <header className={`flex items-center justify-center px-10 py-10 bg-gray-900 text-white font-extrabold ${styles.header}`}>
                <div className="md:container grid sm:grid-cols-1 md:grid-cols-1 mx-auto flex items-center justify-center flex-col">
                    <div>
                        <h1 className="text-5xl mb-5">{props.title}</h1>
                        <p className="text-gray-300 font-light mb-10">
                        </p>
                        <button className="px-5 py-3 bg-gray-100 rounded-xl text-gray-900 font-bold">See Our Work</button>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default GeneralHeader;