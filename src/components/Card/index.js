import React from 'react';


function Cards(props) {

    return (

        <div className="card rounded-2 card-shadow m-3 mt-3 mb-4" style={{ width: '25rem' }}>
            <img alt={props.name} src={props.image} className="rounded card-img-top" />
            <div className="card-body">
                <h6 className="card-title text-center">{props.name}</h6>
                <p className="card-text">{props.description}
                </p>
            </div>
            <div className="card-body">
                <a href={props.deployed} rel="noreferrer" className="card-link">Web
                    Deployment</a>
                <a href={props.github} rel="noreferrer" className="card-link">GitHub
                    Page
                    link</a>
            </div>
        </div >



    );
}

export default Cards;
