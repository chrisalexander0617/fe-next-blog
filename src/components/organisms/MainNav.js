import React from 'react';

export const MainNav = props => {
    return (
        <div className="bg-gray-900 py-10 px-10">
            <nav className={`md:container mx-auto flex justify-between w-full ${props.bg}`}>
                <div>
                    <a href="/"><div className={`${props.textColor}`}>Digyt</div></a>
                </div>
                <div>
                    <ul className="flex flex-wrap">
                        <a href="/"><li className="text-white mx-5 font-bold uppercase nav-link">Home</li></a>
                        <a href="/blog"><li className="text-white mx-5 font-bold uppercase nav-link">Blog</li></a>
                        <a href="/#faq"><li className="text-white mx-5 font-bold uppercase nav-link">Faq</li></a>
                        <li className="text-white mx-5 font-bold uppercase nav-link">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};