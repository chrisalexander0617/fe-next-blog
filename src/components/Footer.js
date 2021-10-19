import React from 'react';

function Footer(props){
    return (
        <>
            <footer className={`flex  justify-between p-10 w-full ${props.bg}`}>
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
        </>
    )
}

export default Footer;
