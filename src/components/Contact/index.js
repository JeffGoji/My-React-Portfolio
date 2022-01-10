import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {


    return (
        <section className="container-sm" id="contact">
            <div className="row p-3">
                {/* <div classNameName='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id='name' />
            </div> */}
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Your Phone Number</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="713-555-5555" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <div className="container-sm">
                    <button type="button" className="btn btn-danger fs-4" placeholder="Your message here">Submit Form</button>
                </div>
            </div>
        </section>


    );
}


export default Contact;