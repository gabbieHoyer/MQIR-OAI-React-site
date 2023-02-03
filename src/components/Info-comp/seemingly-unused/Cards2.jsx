import React, {Component} from 'react';
import Card2 from './parCardUI';

import pipeline from '../../assets/pipeline_femur_new1.png';
import feature from '../../assets/feature_space.PNG';
import k_pipeline from '../../assets/k_pipeline.PNG';
import app3 from '../../assets/app3_new1.PNG';


class Cards2 extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card2 imgsrc={k_pipeline} title="Test card" 
                        paragraph1="From the segmentation we extracted meniscus, bone and cartilage surfaces for the whole 
                        dataset of 9K knees from ~5k subjects followed up for 8 years ~45K MRI. All the bone and cartilage 
                        surfaces were then registered to the same Atlas so we have the same number of vertices in each mesh 
                        and everything is anatomically matched. For each vertex we have associated a value of cartilage thickness, 
                        value of T2 and geometric coordinates to describe bone shape.

                        https://pubmed.ncbi.nlm.nih.gov/34753963/
                        
                        This is the same technique used for statistical shape modeling:
                        
                        https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5019115/
                        
                        We also applied this on OAI for T2 maps for OA diagnosis
                        
                        https://pubmed.ncbi.nlm.nih.gov/30905742/
                        
                        Kenneth worked on a similar pipeline for the extraction of meniscus shape modes using PCA"/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Cards2;
