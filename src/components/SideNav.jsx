import React from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faFile, faParagraph, faUserGraduate, faUniversity } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
    return(
        <React.Fragment>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
            </style>
            <section className="w-1/3">
                <div className="flex-row bg-gray-100 m-4 border shadow rounded-lg tracking-wider" style={{fontFamily:"'Lato',sans-serif"}}>
                    <h2 className="p-4 ml-16 font-bold text-xl">Just 5 steps to apply!</h2>
                    <ul className="flex-row text-gray-900">
                        <div className="flex border-b-2 border-gray-500 ">
                            <li className="px-2 py-3  justify-center">1) Resume</li>
                            <div className="px-2 py-3">
                                <FontAwesomeIcon icon={faFile}/>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-gray-500">
                            <li className="px-2 py-3 justify-center">2) Recommendations</li>
                            <div className="px-2 py-3">
                                <FontAwesomeIcon icon={faUserTie}/>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-gray-500">
                            <li className="px-2 py-3 justify-center">3) Transcripts</li>
                            <div className="px-2 py-3">
                                <FontAwesomeIcon icon={faParagraph}/>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-gray-500">
                            <li className="px-2 py-3 justify-center">4) College Application</li>
                            <div className="px-2 py-3">
                                <FontAwesomeIcon icon={faUniversity}/>
                            </div>
                        </div>
                        <div className="flex border-b-2 border-gray-500 bg-gray-400">
                            <li className="px-2 py-3 justify-center">5) Why College?</li>
                            <div className="px-2 py-3">
                                <FontAwesomeIcon icon={faUserGraduate}/>
                            </div>
                        </div>
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SideNav;