import React, {Component} from 'react';
import Card from './CardUI';

import pipeline from '../../assets/pipeline_femur_new1.png';
import feature from '../../assets/feature_space.PNG';
import k_pipeline from '../../assets/k_pipeline.PNG';
import app3 from '../../assets/app3_new1.PNG';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={feature} title="Interpretable PC Space" 
                        paragraph="Each surface mesh is described by +6,000 of vertices, Alejandro worked on DL based encoding
                        strategy based with spherical conversion and CNN. https://pubmed.ncbi.nlm.nih.gov/34753963/
                        What we want to do now is to reduce the
                        dimensionality using PCA to obtain a more
                        interpretable feature space.
                        With PCA you can perturb the value of the
                        feature and explore what each dimension
                        actually means."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={pipeline} title="Data Pipeline"
                        paragraph="Using data from the Osteoarthritis Initiative we will extract a
                        PCA based feature space to build an interpretable feature space for T2 relaxation times,
                        cartilage thickness, bone and meniscus shape.
                        Our group developed meniscus bone and cartilage segmentation models for the OAI high
                        resolution DESS MRI sequences..................................................
                        ...............................................................................
                        ..........................."/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={app3} title="PC Interpreter"
                        paragraph="     
                        h................................................................................
                        g.................................................................................
                        PC interpreter can be seen here...................................................
                        g................................................................................
                        g..................................................................................
                        g.................................................................................
                        "/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;