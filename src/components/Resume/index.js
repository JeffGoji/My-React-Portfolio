import React from 'react';
import Tech from './tech';
import autox001 from '../../assets/autox001.jpg'

const Resume = () => {
    return (
        <div className="d-flex justify-content-center">
            <div id="projects" className="col-sm-12 col-md-5 col-lg-5 mt-2 content-box box-padding box-bg rounded-3 text-white text-center">


                <h2 className="text-center card-header rounded-3 text-white mb-3">Resume</h2>

                <div className=" mb-5">
                    <img src={autox001} alt="Details matter the most in all that we do" className='rounded-3 img-fluid' />
                </div>
                <div>
                    <Tech />
                </div>
            </div>
        </div>




    );
}

export default Resume;