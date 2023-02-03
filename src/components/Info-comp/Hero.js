import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import heroVideo from '../../assets/pca_vid_small.mp4';
import heroVideo2 from '../../assets/pca_vid_slim.mp4';

import tibia from '../../assets/Tibia_Bone_Shape_PC2.png'
import pipeline_femur from '../../assets/pipeline_femur.PNG'
import patella from '../../assets/Patella_Thickness_PC4.png'
import meniscus from '../../assets/Lateral_Meniscus_Bone_Shape_PC9.png'
import paper3 from '../../assets/paper3.PNG'
import paper3_1 from '../../assets/paper3_1.PNG'
import paper3_2 from '../../assets/paper3_2.PNG'
import mri from '../../assets/mri.jpg'
import doctor from '../../assets/doctor.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '20px',
    justifyContent: 'center',
    position : 'center',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mri}
          alt="Clinic"
        />
        <Carousel.Caption>
          <h3>Clinic</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mri}
          alt="Research"
        />

        <Carousel.Caption>
          <h3>Research</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mri}
          alt="Bedside"
        />

        <Carousel.Caption>
          <h3>Bedside</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;



{/* <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            OAI PCA Interpreter
          </Typography>
          {/* <Button color="primary" variant="contained">
            Click Me
          </Button> */}
    //     </Box>
    //   </div>
    // </section> */}