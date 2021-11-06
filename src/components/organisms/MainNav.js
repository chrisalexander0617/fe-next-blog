import React from 'react';
function MainNav(props){
    return (
        <div className="bg-gray-900 py-10 px-10">
            <nav className={`md:container mx-auto flex justify-between w-full ${props.bg}`}>
                <div>
                    <div className={`${props.textColor}`}>Digyt</div>    
                </div>
                <div>
                    <ul className="flex flex-wrap">
                        <li className="text-white mx-5 font-bold">Home</li>
                        <a href="/blog"><li className="text-white mx-5 font-bold">Blog</li></a>
                        <li className="text-white mx-5 font-bold">Faq</li>
                        <li className="text-white mx-5 font-bold">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MainNav;
