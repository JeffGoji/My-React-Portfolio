import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (

        <div>


            <section className="container-lg box-padding mt-2 rounded-3" id="contact">

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

                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="form-label text-white fw-bold fs-5">Name:</label>
                                    <input type="text" name="name" className="form-control" placeholder="John Smith" defaultValue={name} onBlur={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="form-label text-white fw-bold fs-5">Email address:</label>
                                    <input type="email" name="email" className="form-control" placeholder="name@example.com" defaultValue={email} onBlur={handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="message" className="form-label text-white fw-bold fs-5">Message:</label>
                                    <textarea name="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange} />
                                </div>
                                {errorMessage && (
                                    <div>
                                        <p className="error-text text-white fs-4 bg-dark">{errorMessage}</p>
                                    </div>
                                )}
                                <button data-testid="button" className="btn btn-danger fs-4 mt-2" type="submit">Submit</button>
                            </form>

                        </div>

                    </div>

                </div>

            </section >
        </div>

    );
}

export default Contact;