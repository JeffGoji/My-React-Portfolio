import React from 'react';
import Profile1 from "../../assets/Profile1.jpg"

function Profile() {

    return (

        <div>

            <div id="profile" className="container-lg mt-2 box-padding box-bg text-white rounded-3 content-box">
                <div className="row mb-3 rounded-2" >
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <img src={Profile1} className="img-fluid rounded-2 m-2 mt-5" alt="Jeffrey Anderson-Lester" />
                    </div>
                    <div className="col-lg-8 col-md-9 col-sm-12 mt-2 fs-5">
                        <h4><strong>About Me</strong></h4>
                        <p>
                            I am Jeffrey Anderson-Lester. I am a Full-stack web developer currently enrolled at the Rice
                            University
                            Full-Stack Developer program.
                            <br />
                            I am specializing in full-stack web development which consist of HTML5, CSS3, JavaScript, Git, jQuery,
                            Bootstrap 5, Express.JS, nodeJS, SQL, NoSQL,
                            React, .Net 4 MVC, .Net6/React,
                            and
                            MERN.

                            <br />
                            <br />
                            Fully versed in Windows OS, fully versed in command line and setting up and using virtual
                            environments and form control.
                            Dedicated professional with 9+ years of experience in oil field related drilling fluid engineering
                            and
                            with
                            a focus on safety and timely solutions for customer needs.
                            <br />
                            Committed to delivering high quality troubleshooting and solutions.
                            <br />
                            Energetic, organized and professional with an eye for detail. Able to work under pressure
                            efficiently
                            solo
                            or on a team.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;