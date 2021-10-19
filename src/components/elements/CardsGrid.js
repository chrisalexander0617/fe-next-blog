import React from 'react';
import styles from '../../../styles/Global.module.css';

function CardsGrid(props){
    return (
        <>
            <div className="bg-gray-100 py-10 px-10">
             
                <div className={`py-5 grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mx-auto md:container flex items-center text-white`}>
                    
                    <div className="bg-blue-100 px-10 py-10 shadow-xl rounded-xl">
                        <h2 className="text-gray-900 text-2xl mb-3 font-bold">API Design</h2>
                        <div>
                            <p className="text-gray-900 font-weight">Build a scalable BaaS that will allow customized endpoints that corresponds to your </p>
                        </div>
                    </div>

                    <div className="bg-white px-10 py-10 shadow-xl rounded-xl">
                        <h2 className="text-red-500 text-2xl mb-3 font-bold">Full Stack Development</h2>
                        <div>
                            <p className="text-gray-600 font-weight">MVP with complete with front and backend technologies that will allow scalability</p>
                        </div>
                    </div>
                    <div className="bg-green-100 px-10 py-10 shadow-xl rounded-xl">
                        <h2 className="text-green-500 text-2xl mb-3 font-bold">Authentication</h2>
                        <div>
                            <p className="text-green-900 font-weight">Build a scalable BaaS that will allow customized endpoints that corresponds to your </p>
                        </div>
                    </div>
                    <div className="bg-white px-10 py-10 shadow-xl rounded-xl">
                        <h2 className="text-gray-900 text-2xl mb-3 font-bold">Integration</h2>
                        <div>
                            <p className="text-gray-400 font-weight">We integrate popular business tools for unique infrastructures</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsGrid;