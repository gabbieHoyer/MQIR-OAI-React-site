import React from 'react';

import pipeline from '../../assets/pipeline_femur.PNG';
import feature from '../../assets/feature_space.PNG';
import k_pipeline from '../../assets/k_pipeline.PNG';
import app2 from '../../assets/app2.PNG';

import './card-style.css';

const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.paragraph}</p>
                <a href="#" className="btn btn-outline-sucess">Go Anywhere </a>
            </div>
        </div>
    );

}

export default Card;