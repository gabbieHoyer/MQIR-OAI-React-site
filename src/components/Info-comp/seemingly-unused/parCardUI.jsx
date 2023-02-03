import React from 'react';

import './card-style.css';

const Card2 = props =>{

    return(
        <div className="card2 text-center shadow" width={63}>
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body2 text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.paragraph1}</p>
                <a href="#" className="btn btn-outline-sucess">Go Anywhere </a>
            </div>
        </div>
    );

}

export default Card2;