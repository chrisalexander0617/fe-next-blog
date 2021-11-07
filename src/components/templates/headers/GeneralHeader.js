import React from 'react';
import Button from '../../atoms/buttons/Button'
import styles from '../../../../styles/Global.module.css';

export default function GeneralHeader(props){
    return (
        <>
            <header className={`header flex items-center justify-center px-10 py-10 bg-gray-900 text-white font-extrabold ${styles.header}`}>
                <div className="md:container grid sm:grid-cols-1 md:grid-cols-1 mx-auto flex items-center justify-center flex-col">
                    <div>
                        <h1 className={` ${styles.title} header-title text-5xl mb-5">{props.title} `}>{props.title}</h1>
                        <p className="text-gray-300 font-light mb-10"></p>
                        <Button
                            button_text="See Our Work"
                            bg_color="bg-blue-500"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}