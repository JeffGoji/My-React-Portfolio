import React from 'react';
import enterprisingsolutions from '../../assets/enterprisingsolutions.png';
import techblog1 from '../../assets/techblog1.png';




function Nav() {

    return (

        <div id="projects" className="container-fluid">
            <div className="row mt-3">
                <a href="projects"></a>
                <div id="projects" className="section-title">
                    <div className="row">
                        <h2 className="text-center card-header bg-primary text-white mt-5 mb-3">Projects</h2>
                    </div>
                    <div className="row">
                        <h4 className="mt-4">Full-Stack projects</h4>
                    </div>
                    <div className="row mt-3">
                        <div className="card rounded-2 card-shadow m-1 mt-3 mb-4" style={{ width: '25rem' }}>
                            <a href="./assets/techblog1.png" rel="noreferrer"><img src={techblog1}
                                alt="techblog9000" className="rounded card-img-top" /></a>
                            <div className="card-body">
                                <h6 className="card-title">Tech-Blog 9000</h6>
                                <p className="card-text">This is a full-stack web application that utilizes a SQL database.
                                    <br />
                                    This project is a Tech Blog site where users can browse post without logging in. If
                                    the user signs up and logs in they will be able to create their own blog post and
                                    add comments to other user's post.
                                    <br />
                                    <h6><b>Technology used</b></h6>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>ES6</li>
                                        <li>CSS3</li>
                                        <li>Bootstrap 5</li>
                                        <li>Handlebars</li>
                                        <li>MySQL</li>
                                        <li>bcrypt 5.0.1</li>
                                        <li>connect-session-sequelize 7.1.2</li>
                                        <li>express-handlebars 6.0.1</li>
                                        <li>express-session 1.17.2</li>
                                        <li>express 4.17.1</li>
                                        <li>inquirer 8.2.0</li>
                                        <li>mysql2 2.3.3</li>
                                        <li>sequalize 6.12.0</li>
                                        <li>Heroku Deployment</li>

                                        <li>nodemon 2.0.15 (used briefly for testing)</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="card-body">
                                <a href="https://tech-notes-9000.herokuapp.com/" rel="noreferrer" className="card-link">Web
                                    Deployment</a>
                                <a href="https://github.com/JeffGoji/techblog" rel="noreferrer" className="card-link">GitHub
                                    Page
                                    link</a>

                            </div>
                        </div>

                        <div className="card rounded-2 card-shadow m-1 mt-3 mb-4" style={{ width: '25rem' }}>
                            <a href="./assets/enterprisingsolutions.png" rel="noreferrer"><img
                                src={enterprisingsolutions} alt="Enterprising Solutions Site"
                                className="rounded card-img-top" /></a>
                            <div className="card-body">
                                <h6 className="card-title">Enterprising Arrangements</h6>
                                <p className="card-text">This is a full-stack web application that utilizes a SQL database.
                                    <br />
                                    This project is used to search and post venues in your local area. Conglomerate all
                                    venue types from multiple venue owners on the site for viewers to have easy access
                                    to the information they need. Or Sign Up and Login to post, edit, or delete venues
                                    from the site.
                                    I worked with Noah Tidwell and Ivonne
                                    <h6><b>Technology used</b></h6>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>ES6</li>
                                        <li>CSS3</li>
                                        <li>Bootstrap 5</li>
                                        <li>Handlebars</li>
                                        <li>MySQL</li>
                                        <li>bcrypt 5.0.1</li>
                                        <li>connect-session-sequelize 7.1.2</li>
                                        <li>express-handlebars 6.0.1</li>
                                        <li>express-session 1.17.2</li>
                                        <li>express 4.17.1</li>
                                        <li>inquirer 8.2.0</li>
                                        <li>mysql2 2.3.3</li>
                                        <li>sequalize 6.12.0</li>
                                        <li>nodemon 2.0.15 (used briefly for testing)</li>
                                        <li>Heroku Deployment</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="card-body">
                                <a href="https://enterprising-arrangements1.herokuapp.com/" rel="noreferrer"
                                    className="card-link">Web
                                    Deployment</a>
                                <a href="https://github.com/NoahTidwell/Enterprising-Arrangements" rel="noreferrer"
                                    className="card-link">GitHub
                                    Page
                                    link</a>

                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </div >

    );
}

export default Nav;