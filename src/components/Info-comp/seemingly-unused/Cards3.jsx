import React, {Component} from 'react';
import Card3 from './parCardUI3';

import pipeline from '../../assets/pipeline_femur_new1.png';
import feature from '../../assets/feature_space.PNG';
import k_pipeline from '../../assets/k_pipeline.PNG';
import app3 from '../../assets/app3_new1.PNG';


class Cards3 extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card3 imgsrc1={feature} imgsrc2={pipeline} title="Test card" 
                        paragraph="From the segmentation we extracted meniscus, bone and cartilage surfaces for the whole 
                        dataset of 9K knees from ~5k subjects followed up for 8 years ~45K MRI. All the bone and cartilage 
                        "/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Cards3;