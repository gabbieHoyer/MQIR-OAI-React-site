import React from 'react';

import './card-style.css';

const Card3 = props =>{
    return(
        <div className="card2 text-center shadow" width={63}>
            <div className="overflow">
                <img src={props.imgsrc1} alt="Image1" className="card-img-top"/>
            </div>
            {/* <div className="overflow">
                <img src={props.imgsrc2} alt="Image1" className="card-img-top"/>
            </div> */}
            <div className="card-body text-dark">
                <img src={props.imgsrc2} alt="Image1" className="card-img-top"/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.paragraph}</p>
                <a href="#" className="btn btn-outline-sucess">Go Anywhere </a>
            </div>
        </div>
    );

}

export default Card3;