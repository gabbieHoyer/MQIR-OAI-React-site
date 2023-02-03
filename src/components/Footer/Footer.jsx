import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

  
import '../../App.css';

const Footer = () => {
  return (

    <MDBFooter className='app-footer' >
      <MDBContainer className='pt-4'>
        <section className='mb-4'>

        <MDBRow style={{justifyContent: 'center', fontsize: '12px'}}>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{justifyContent: 'center'}}>
              <h5 className='text-uppercase'>About</h5>

              <ul className='list-unstyled mb-0'>
                <li> 
                  <a href='#!' className='link-color'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='link-color'>
                    Link 2
                  </a>
                </li>
                </ul>
            </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Projects</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='link-color'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='link-color'>
                    Link 4
                  </a>
                </li>
                </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='link-color'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='link-color'>
                    Link 2
                  </a>
                </li>
                </ul>
            </MDBCol>
            
          </MDBRow>
                
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', color:'white', textDecoration: 'none'}}>
        © 2022 Copyright: 
        <a className='link-color' href='https://nda.nih.gov/oai/' style={{textDecoration: 'none'}}>
            OAI Site
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;