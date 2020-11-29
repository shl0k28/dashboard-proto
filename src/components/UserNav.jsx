import React from 'react';
//logo
import logo from '../assets/inDebit-trans.png';


//icons
import { faHome, faCreditCard, faPercentage, faInbox, faCaretDown, faSearch, faQuestionCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserNav = () => {
    return(
        <React.Fragment>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
            </style>
            <header className="flex">
                <div className="bg-gray-900 flex items-center justify-start w-full tracking-tight border-b-2 shadow-sm" style={{fontFamily:"'Ubuntu',sans-serif"}}>
                    <nav className="ml-8">
                        <ul className="flex items-center justify-center text-lg font-normal text-gray-200">
                        <li className="flex px-5 py-3 hover:text-gray-100 hover:bg-gray-800 ">
                            <div>
                                <FontAwesomeIcon icon={faHome}/>
                            </div>
                            <div className="ml-2">
                                <a href="/">Home</a>
                            </div>
                        </li>
                        <li className="flex px-5 py-3  hover:text-gray-100 hover:bg-gray-800 ">
                            <div>
                                <FontAwesomeIcon icon={faCreditCard} />        
                            </div>
                            <div className="ml-2">
                                <a href="/">Payments</a>
                            </div>
                        </li>
                        <li className="flex px-5 py-3   hover:text-gray-100 hover:bg-gray-800">
                            <div>
                                <FontAwesomeIcon icon={faPercentage} />
                            </div>
                            <div className="ml-2">
                                <a href="/">Loans</a>
                            </div>
                        </li>
                        <li className="flex px-5 py-3  hover:text-gray-100 hover:bg-gray-800">
                            <div>
                                <FontAwesomeIcon icon={faInbox} />
                            </div>
                            <div className="ml-2">
                                <a href="/">Inbox</a>
                            </div>
                        </li>
                        <li className="flex px-5 py-3">
                            <input type="text" className="bg-gray-800 rounded px-4" name="search" id="search" placeholder="Search"/>
                            <button className="-ml-8">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </li>
                        </ul>
                    </nav>
                </div>
                <div className="bg-gray-900 flex items-center w-full tracking-tight border-b-2 shadow-sm" style={{fontFamily:"'Ubuntu',sans-serif"}}>
                    <nav className="mr-6">
                        <ul className="text-gray-100">
                            <li className="flex px-5 py-3   hover:text-gray-100 hover:bg-gray-800">
                                <div>
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </div>
                                <div className="ml-2">
                                    <a href="/">FAQ's</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="bg-gray-900 flex items-center w-full tracking-tight border-b-2 shadow-sm" style={{fontFamily:"'Ubuntu',sans-serif"}}>
                    <nav className="mr-6">
                        <ul className="text-gray-100">
                            <li className="flex px-2 py-3 hover:text-gray-100 hover:bg-gray-800">
                                <div>
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                </div>
                                <div className="ml-2">
                                    <a href="/">Essentials</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="bg-gray-900 flex items-center justify-end w-full tracking-tight border-b-2 shadow-sm">
                    <nav className="mr-6">
                        <ul className="text-gray-100">
                            <li className="flex px-5 py-3">
                                <div>
                                    <a href="/">
                                        <img className="h-8 w-8 rounded-full" src={gates} alt="University"/>
                                    </a>
                                </div>
                                <div className="ml-2">
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default UserNav;
