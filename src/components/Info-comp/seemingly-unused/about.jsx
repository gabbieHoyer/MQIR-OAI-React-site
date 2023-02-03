import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


import pipeline from '../../assets/pipeline_femur.PNG'
import feature from '../../assets/feature_space.PNG'
import k_pipeline from '../../assets/k_pipeline.PNG'


export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:100, padding:30}}>
                            <h2 className="colorlib-heading"> 100-D+ Interpretable qMRI-based Feature Space to Phenotype Knee
                            Osteoarthritis</h2>
                        </div> */}
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <h4> </h4>
                        <h4 className="colorlib-heading" style={{display:'flex', justifyContent:'center', alginItems:'center',  height:50, padding:30}}>Background and Aims</h4>
                        </div>
                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                            <p>Using data from the Osteoarthritis Initiative we will extract a
                                PCA based feature space to build an interpretable feature space for T2 relaxation times,
                                cartilage thickness, bone and meniscus shape.
                                Our group developed meniscus bone and cartilage segmentation models for the OAI high
                                resolution DESS MRI sequences.</p>
                        </div> */}
                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p>Cartilage Meniscus: </p>
                        </div> */}
                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/32897602/" target="_blank" rel="noreferrer">
                                Cartilage Meniscus
                            </a>
                        </div> */}
                        {/* <div style={{padding:30}}> </div> */}

                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p>Bone:</p>
                        </div> */}
                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/32243657/" target="_blank" rel="noreferrer">
                                Bone
                            </a>
                        </div>

                        <div style={{padding:10}}> </div> */}


                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>

                            <p> From the segmentation we extracted meniscus, bone and cartilage surfaces for the whole
                                dataset of 9K knees from ~5k subjects followed up for 8 years ~45K MRI. All the bone and
                                cartilage surfaces were then registered to the same Atlas so we have the same number of
                                vertices in each mesh and everything is anatomically matched. For each vertex we have
                                associated a value of cartilage thickness, value of T2 and geometric coordinates to describe
                                bone shape.</p>
                        </div>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p>https://pubmed.ncbi.nlm.nih.gov/34753963/ </p>
                        </div> */}

                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center', padding:30}}>
                            <img src={pipeline}  height ={198} width={714} />
                        </div>     */}

                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p>Each surface mesh is described by +6,000 of vertices, Alejandro worked on DL based encoding
                                strategy based with spherical conversion and CNN. https://pubmed.ncbi.nlm.nih.gov/34753963/
                                What we want to do now is to reduce the
                                dimensionality using PCA to obtain a more
                                interpretable feature space.
                                With PCA you can perturb the value of the
                                feature and explore what each dimension
                                actually means.</p>
                        </div> */}

                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center', padding:30}}>
                            <img src={feature}  height ={414} width={400} />
                        </div> */}

                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p>This is the same technique used for statistical shape modeling: </p>
                        </div>    
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5019115/ </p>
                        </div>   

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p> We also applied this on OAI for T2 maps for OA diagnosis </p>
                        </div>    

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p> https://pubmed.ncbi.nlm.nih.gov/30905742/ </p>
                        </div>    

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <p>Kenneth worked on a similar pipeline for the extraction of meniscus shape modes using PCA: </p>
                        </div> */}

                        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center', padding:30}}>
                            <img src={k_pipeline}  height ={171} width={920} />
                        </div> */}


                            {/* <h4 className="colorlib-heading" style={{display:'flex', justifyContent:'center', alignItems:'center',  height:50, padding:30}}>Feature Space Composition</h4> */}
                            
                            {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'left'}}>
                                <p>The feature space we will extract will be composed by : 100+ dimensions </p>
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'left'}}>
                                <li>  30 BoneShape: 10 Femur, 10 Tibia, 10 Patella </li>
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'left'}}>
                                <li> 30 CartilageThickness: 10 Femur, 10 Tibia, 10 Patella </li>
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <li> 30 CartilageT2: 10 Femur, 10 Tibia, 10 Patella </li>
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <li> 20 Meniscus: 10 medial, 10 lateral </li>
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:30}}>
                                <p> This means that each knee will have 110 numbers associated with it. Each knee is a point in a
                                100-D + multi dimensional space. </p>
                            </div> */}
                            {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <h4 className="colorlib-heading" >PC App Overview </h4>
                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            </div>
            </div>
            <div className="row row-pt-md">
            </div>
        </div>
        </section>
      </div>
    )
  }
}