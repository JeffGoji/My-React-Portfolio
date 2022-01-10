import React from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {


    return (
        <section className="container-lg content-box box-padding mt-2" id="contact">
            <div className="row p-3">
                <div className="col-sm-12 col-md-12 col-lg-6">

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fw-bold">E-mail: <a href="mailto:jeff.lester01@outlook.com">
                            jeff.lester01@outlook.com</a></li>

                        <li className="list-group-item fw-bold">Phone: <a href="tel:7133717902">713-371-7902</a></li>
                        <li className="list-group-item fw-bold">LinkedIn Profile: <a
                            href="https://www.linkedin.com/in/jeffrey-anderson-lester-36b23b112/ " target="_blank"
                            rel="noreferrer"> Jeffrey
                            Anderson-Lester</a> </li>
                        <li className="list-group-item fw-bold mb-4">Resume: <a href="https://jeffgoji.github.io/assets/img/resume.pdf" target="_blank" rel="noreferrer">Click to
                            download</a>
                        </li>

                    </ul>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Phone Number</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="713-555-5555" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <div className="container-sm">
                        <button type="button" className="btn btn-danger fs-4" placeholder="Your message here">Submit Form</button>
                    </div>
                </div>
            </div>
        </section>


    );
}


export default Contact;