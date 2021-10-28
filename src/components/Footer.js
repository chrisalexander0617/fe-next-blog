import React from 'react';

function Footer(props){
    return (
        <>
            <div className={`${props.bg} px-10`}>
                <footer className={`md:container mx-auto flex justify-between py-10 px-0 w-full`}>
                    <div>
                        <div className={`font-bold ${props.textColor}`}>Digyt</div>    
                    </div>
                    <div>
                        <ul className="flex flex-wrap">
                            <li className="text-gray-900 mx-5 font-bold"></li>
                            <li className="text-gray-900 mx-5 font-bold"></li>
                            <li className="text-gray-900 mx-5 font-bold"></li>
                            <li className="text-gray-900 mx-5 font-bold"></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;
