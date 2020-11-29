import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFile, faPlusCircle, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Recommendations = () => {
    return(
        <React.Fragment>
            <div className="bg-gray-100 h-full flex items-center justify-center">
                <h1 className="text-gray-900 font-medium text-2xl mt-2 ml-4 mr-4 mb-2">Add Recommendations</h1>
                <FontAwesomeIcon icon={faUserTie}/>
            </div>
            <div className="flex justify-center mt-6 text-xl rounded-full text-gray-700">
                <h3>Submit recommendations from atleast 3 of your professors.</h3>
                <br/>
            </div>
            <div className="flex justify-center m-4 border-dotted border-4">
                <p className="text-xl text-gray-800 underline">Click to add your recommendation file.</p>
                <div className="flex items-center justify-center">
                    <button className="-ml-32">
                        <FontAwesomeIcon className="text-4xl mt-16 mb-12 -ml-48 hover:scale-75" icon={faPlusCircle}/>
                    </button>
                </div>
            </div>                
        </React.Fragment>
    )
}

export default Recommendations;