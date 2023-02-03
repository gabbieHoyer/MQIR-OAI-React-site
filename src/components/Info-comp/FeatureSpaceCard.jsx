import React, {Component} from 'react';
import FeatureCard from './featureCardUI';

import pipeline from '../../assets/pipeline_femur_new1.png';
import feature from '../../assets/feature_space.PNG';
import k_pipeline from '../../assets/k_pipeline.PNG';
import app3 from '../../assets/app3_new1.PNG';
import tissues from '../../assets/tissues.png';


class FeatureSpaceCard extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <FeatureCard imgsrc={tissues} title="Feature Space Composition" 
                        paragraph1="The feature space we will extract will be composed by :"
                        paragraph2="100+ dimensions 30 BoneShape: 10 Femur, 10 Tibia, 10 Patella 30"
                        paragraph3="CartilageThickness: 10 Femur, 10 Tibia, 10 Patella 30" 
                        paragraph4="CartilageT2: 10 Femur, 10 Tibia, 10 Patella 20 Meniscus: 10 medial, 10 lateral "
                        paragraph5="This means that each knee will have 110 numbers associated with it. Each knee is a point in a 100-D + multi dimensional space."
                        />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default FeatureSpaceCard;
