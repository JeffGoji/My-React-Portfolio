import React, { useState } from 'react';
import projects from '../../data';
import Card from "../Card"


function Projects(props) {
    const [projectList] = useState(projects);


    return (
        <div >
            <section id="projects" className="container-lg mt-2">

                <div className="row">

                    <h2 className="text-center card-header rounded-3 text-white mb-3">Projects</h2>

                </div>
                <div className="row d-flex justify-content-center mb-5">

                    {props.children}
                    {/* Map through 'portfolioList' and render a 'Card' for each project */}
                    {projectList.map((projects) => (
                        <Card
                            key={projects.id}
                            image={projects.image}
                            name={projects.name}
                            description={projects.description}
                            github={projects.github}
                            deployed={projects.deployed}
                        />
                    ))}

                </div>


            </section >
        </div>

    );
}

export default Projects;