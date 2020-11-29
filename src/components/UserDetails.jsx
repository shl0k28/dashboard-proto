import React from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

//dummy data
import { data } from '../assets/data/data';
import profilePic from '../assets/gates.jpeg';

const UserDetails = () => {
    return(
        <React.Fragment>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
            </style>
            <main>
                <div className="flex-row bg-gray-100 m-4 border-b-2 shadow-sm rounded-lg tracking-tight" style={{fontFamily:"'Ubuntu',sans-serif"}}>
                    <div className="flex">
                        <div className="ml-6">
                            <img src={profilePic} alt="logo" className="border-2 shadow-md rounded-full m-6 h-48 w-48"/>
                        </div>
                        <div className="flex-row mt-12 ml-6">
                            <h1 className="font-medium text-3xl text-gray-900"> {`${data[0].title}. ${data[0].firstName} ${data[0].lastName}`} </h1>
                            <h2 className="text-xl text-gray-800" style={{fontFamily:"'Lato',sans-serif"}}> {`${data[0].course}, ${data[0].college}`} </h2>
                            <h3 className="text-md py-2 text-gray-700"> {`${data[0].startDate} - ${data[0].endDate}`} </h3>
                            <h2 className="text-gray-900 font-semibold"> GPA - {data[0].grades}  </h2>
                            <div className="flex text-gray-800 mt-3">
                                <FontAwesomeIcon icon={faFacebook} className="mr-8"/>
                                <FontAwesomeIcon icon={faTwitter} className="mr-8"/>
                                <FontAwesomeIcon icon={faLinkedin} className="mr-8"/>
                            </div>
                        </div>
                        <div className="w-1/3 ml-12 mt-12 tracking-wide p-3">
                            <p className="text-gray-800"> {data[0].description} </p>
                            <div className="flex items-center justify-end mt-3">
                                <div className="flex">
                                    <button className="px-2 py-1 border-2 m-2 rounded-full bg-gray-900 border-gray-900 text-gray-200 text-medium text-lg">Edit Profile</button>
                                </div>
                                <button className="px-2 py-1 border-2 m-2 rounded-full border-gray-900 text-gray-800 text-semibold text-lg">More ...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default UserDetails;