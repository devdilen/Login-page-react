import React, { useState } from 'react';
import './LoginSignUp.css';
import key_icon from '../Assets/key.png';
import rd from '../Assets/rd.jpeg';
import contact_icon from '../Assets/person.png'
import { Row, Col } from 'react-bootstrap';

export const LoginSignUp = () => {

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
  };
  return (
    <Row className="container">
      <Col xs={12} sm={12} md={8} lg={8} className='rd'>
        <img src={rd} alt="" />
      </Col>
      
      <Col xs={12} sm={12} md={8} lg={8} className='header'>
        <div className='text'>
          Login
        </div>
        <div className='underline'></div>
      </Col>
      
      <div className='inputs'>
        {isLoginFormVisible ? (
          <>
            <Col xs={12} sm={12} md={8} lg={8} className='input'>
              <img src={key_icon} alt="" />
              <input
                type="text"
                placeholder='OTP'
              />
            </Col>
          </>
        ) : (
          <Col xs={12} sm={12} md={8} lg={8} className='input'>
            <img src={contact_icon} alt="" />
            <input
              type="text"
              placeholder='Phone Number'

            />
          </Col>
        )}
      </div>
      {!isLoginFormVisible && (
        <div className='submit-container'>
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={8}
            className="submit gray"
            onClick={handleLoginClick}
          >
            Get OTP
          </Col>
        </div>
      )}
      
      {isLoginFormVisible && (
        <div className='submit-container'>
          <Col
            xs={12}
            sm={12}
            md={8}
            lg={8}
            className="submit gray"
          >
            Login
          </Col>
          
         </div> )}

         {isLoginFormVisible && (  <Col xs={12} sm={12} md={8} lg={8}>
            <div> <p className='privacy'> By clicking on Login, I accept the <span className='terms'><a href="https://www.freeprivacypolicy.com/live/152edcce-c955-47c9-9495-862eb9b929a0"><strong>Terms & Conditions</strong></a></span> & <span className='terms'><a href="https://www.freeprivacypolicy.com/live/9adddeb7-3f49-45b4-93eb-7949c6bb8b87"><strong>Privacy Policy</strong></a></span></p></div>
              </Col>
           )}

           
        
       
     
    </Row>
  );
};