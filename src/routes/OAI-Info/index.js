import React, { Component, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../../App.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

// import useForm from 'react-hook-form';

import PropTypes from 'prop-types';

import { getLocalizedValue, locales } from '../../utils/localization'
import { LanguageContext } from '../../contexts/LanguageContext'

import Navigation from '../../components/Navbar'
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Info-comp/Hero.js'
import Cards from '../../components/Info-comp/Cards';
import CardGrid from '../../components/Info-comp/CardGrid';
import AppCard from '../../components/Info-comp/AppCardUI';
import FeatureSpaceCard from '../../components/Info-comp/FeatureSpaceCard';

import logo from '../../assets/logo.png'
import vid from '../../assets/pca_vid_small.mp4'

import app1 from '../../assets/app1.PNG'
import app2 from '../../assets/app2.PNG'
import app3 from '../../assets/app3.PNG'
import app4 from '../../assets/app4.PNG'
import app5 from '../../assets/app5.PNG'
import app6 from '../../assets/app6.PNG'
import tibia from '../../assets/Tibia_Bone_Shape_PC2.png'
import patella from '../../assets/Patella_Thickness_PC4.png'
import meniscus from '../../assets/Lateral_Meniscus_Bone_Shape_PC9.png'
import paper1 from '../../assets/paper1.PNG'
import paper2 from '../../assets/paper2.PNG'
import paper2_1 from '../../assets/paper2_1.PNG'
import paper2_2 from '../../assets/paper2_2.PNG'
import paper3 from '../../assets/paper3.PNG'
import paper3_1 from '../../assets/paper3_1.PNG'
import paper3_2 from '../../assets/paper3_2.PNG'


import '../../App.css';

class OAIInfo extends Component {
  render() {
    return (
        <div >
            {/* <div id="colorlib-page"> */}
                {/* <div id="container-wrap"> */}
                            {/* <video loop autoPlay className='background-video'>
                                <source src={vid} type="video/mp4"/>
                            </video> */}

            <Hero />
            
            <div style={{ justifyContent:'center' ,alignItems:'center', height:100, padding:30}}>
                <h2 className="colorlib-heading" style={{textAlign:'center'}}> 100-D+ Interpretable qMRI-based Feature Space to Phenotype Knee
                Osteoarthritis</h2>
            </div>

            
            
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'5rem'}}>
                <h4 className="colorlib-heading" >Projects</h4>
            </div>
            
            <Cards/>

            <div style={{display:'flex', justifyContent:'center', alignItems:'center',  paddingTop:'5rem'}}>
            <h4> </h4>
            <h4 className="colorlib-heading" style={{display:'flex', justifyContent:'center', alginItems:'center',  height:50, padding:30}}>Background and Aims</h4>
            </div>

            <FeatureSpaceCard/>

            <div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'5rem'}}>
                    <h4 className="colorlib-heading" >Publications</h4>
                </div>
            </div>


            <div className='wrapper-card' style={{padding:'1rem'}}>
                <CardGrid img={tibia} title='tibia' description='tibia desc..............
                ..........................................................
                ..................................................' btn_text='tibia paper'/>
                <CardGrid img={patella} title='patella' description='patella desc' btn_text='patella paper'/>
                <CardGrid img={meniscus} title='meniscus' description='meniscus desc..................' btn_text='meniscus paper'/>

            </div>

            {/* example of papers
            p1: https://pubmed.ncbi.nlm.nih.gov/32897602/
            p2: https://pubmed.ncbi.nlm.nih.gov/32243657/
            p3: https://pubmed.ncbi.nlm.nih.gov/34753963/ 
                */}

            <div className='wrapper-card' style={{padding:'1rem'}}>
                <CardGrid img={paper1} title='Towards understanding mechanistic subgroups of osteoarthritis: 8-year cartilage thickness trajectory analysis' description='.........
                ................' btn_text='tibia paper'
                link='https://pubmed.ncbi.nlm.nih.gov/32897602/'/>
                <CardGrid img={paper2_1} title='Learning osteoarthritis imaging biomarkers from bone surface spherical encoding' description='patella desc' btn_text='patella paper' 
                link=' https://pubmed.ncbi.nlm.nih.gov/32243657/'/>
                <CardGrid img={paper3_1} title='Uncovering associations between data-driven learned qMRI biomarkers and chronic pain' description='meniscus desc..................' btn_text='meniscus paper'
                link='https://pubmed.ncbi.nlm.nih.gov/34753963/'/>

            </div>
        
            <div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'5rem'}}>
                    <h4 className="colorlib-heading" >PC App Overview </h4>
                </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                <AliceCarousel autoPlay autoPlayInterval={"4000"}>
                    <div style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                        <div className='wrapper-card'  style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                            <AppCard imgsrc={app1} title="OAI PC APP" 
                            paragraph="Systematic and collaborative interpretation of 100-D Principal Component Space
                            "/>
                        </div>        
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                        <div className='wrapper-card'  style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                            <AppCard imgsrc={app2} title="OAI PC APP" 
                            paragraph="Select from Tissue, Biomarker, and PC specific spaces
                            "/>
                        </div>        
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                        <div className='wrapper-card'  style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                            <AppCard imgsrc={app3} title="OAI PC APP" 
                            paragraph="Consider the community-given interpretation
                            "/>
                        </div>        
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                        <div className='wrapper-card'  style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                            <AppCard imgsrc={app4} title="OAI PC APP" 
                            paragraph="Vote and submit your own interpretation
                            "/>
                        </div>        
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                        <div className='wrapper-card'  style={{ display: 'flex', justifyContent: 'center',  alignItems:'center', padding: 20}}>
                            <AppCard imgsrc={app5} title="OAI PC APP" 
                            paragraph="Track your progress
                            "/>
                        </div>        
                    </div>
                    
                </AliceCarousel>
            </div>
                                     
            <Footer/>
        </div>
    );
  }
}

export default OAIInfo

