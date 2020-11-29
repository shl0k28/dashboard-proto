import React from 'react';

import { data } from '../assets/data/data';
import Recommendations from './Application/AddRecommendations';
import UploadResume from './Application/UploadResume';
import WhyCollege from './Application/WhyCollege';

const AboutUser = () => {

    const type = 1;
    return(
        <React.Fragment>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
            </style>
            <section className="w-2/3">
                <div className="flex-row bg-gray-100 m-4 border-2 shadow-sm rounded-t-lg tracking-tight" style={{fontFamily:"'Ubuntu',sans-serif"}}>
                    <div>
                        <WhyCollege/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutUser;