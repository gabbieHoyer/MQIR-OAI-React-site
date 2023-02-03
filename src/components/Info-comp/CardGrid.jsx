import React, {Component} from 'react';
// import Card3 from './parCardUI3';

import './card-style.css';

import pipeline from '../../assets/pipeline_femur_new1.png';
import feature from '../../assets/feature_space.PNG';
import k_pipeline from '../../assets/k_pipeline.PNG';
import app3 from '../../assets/app3_new1.PNG';
import tibia from '../../assets/Tibia_Bone_Shape_PC2.png'

const CardGrid = props =>{
    return(
        <div className='cardGrid'>
            <div className='card___body'>
                <img src={props.img} className='card__image'/>
                <h2 className='card__title'>{props.title}</h2>
                <p className='card__description'>{props.description}</p>
            </div>
            <a href={props.link}>
                <button className='card__btn'>{props.btn_text}</button>
            </a>
        </div>
    );
}

export default CardGrid;

