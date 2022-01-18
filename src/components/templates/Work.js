import React from 'react';
import styles from '../../../styles/Global.module.css';
import WorkCard from '../elements/cards/WorkCard';

export default function Work(){
    return (
        <>
            <div className="bg-gray-100 py-10 px-10">
                <div className={`py-10 grid sm:grid-cols-1 md:grid-cols-2 mx-auto md:container flex items-center text-white`}>
                    <div>
                        <h2 className="text-gray-900 text-xl">Work</h2>
                    </div>
                </div>
                <div className={`projects-grid py-5 grid sm:grid-cols-1 gap-10 md:grid-cols-2 mx-auto md:container flex items-center text-white ${styles.section}`}>
                    <WorkCard src="https://images.unsplash.com/photo-1634318793254-a0a3350bf735?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                    <WorkCard src="https://images.unsplash.com/photo-1630709287830-9c75f25a58ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
                    <WorkCard src="https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                    <WorkCard src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" />
                </div>
            </div>
        </>
    )
}