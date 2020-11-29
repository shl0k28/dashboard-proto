import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSave, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const WhyCollege = () => {
    return(
        <React.Fragment>
            <div className="bg-gray-100 h-full flex items-center justify-center">
                <h1 className="text-gray-900 font-medium text-2xl mt-2 ml-4 mr-4 mb-2">Why College?</h1>
                <FontAwesomeIcon icon={faUserGraduate}/>
            </div>
            <div>
                <form className="p-2 text-gray-900">
                    <input type="text" className="rounded-lg shadow-md p-2 w-full border-gray-400 text-gray-900 border-2 bg-white h-48"/>
                    <div className="flex w-full items-center justify-end">
                        <div className="flex border border-gray-200 rounded-full text-gray-200 bg-gray-900 m-2 text-lg">
                            <button className="p-2">Save</button>
                            <FontAwesomeIcon icon={faSave} className="mt-3 mr-2"/>
                        </div>
                        <div className="flex border border-gray-200 rounded-full text-gray-800 bg-gray-300 m-2">
                            <button className="p-2">Finish Application</button>
                            <FontAwesomeIcon icon={faPaperPlane} className="mt-3 mr-2"/>
                        </div>
                    </div>
                </form>
            </div>                
        </React.Fragment>
    )
}

export default WhyCollege;