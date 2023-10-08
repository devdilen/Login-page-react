import React, { useState } from 'react';
import './LoginSignUp.css';
import user_icon from '../Assets/person.png';
import phone_icon from '../Assets/phone.png'
import password_icon from '../Assets/password.png';
import key_icon from '../Assets/key.png'


import {Row, Col} from 'react-bootstrap';

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    
      <Row className="container ">
        <Col xs={12} sm={12} md={8} lg={8} className='header'>
          <div  className='text'>
            {action}
          </div>
          <div className='underline'></div>
        </Col>
       
            <div  className='inputs'>
              {action === "Login" ? null : (
                <Col xs={12} sm={12} md={8} lg={8} className='input'>
                  <img src={user_icon} alt="" />
                  <input type="text" placeholder='Name' />
                </Col>
              )}
              <Col xs={12} sm={12} md={8} lg={8}  className='input'>
                <img src={phone_icon} alt="" />
                <input type="text" placeholder='Phone Number' />
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} className='input'>
                <img src={password_icon} alt="" />
                <input type="text" placeholder='Password' />
              </Col>
              {action==="Sign Up"?null:(<Col xs={12} sm={12} md={8} lg={8} className='input'>
                <img src={key_icon} alt="" />
                <input type="text" placeholder='OTP' />
              </Col>)}
              
              
            </div>
       
        {action === "Sign Up" ? null : (
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className='generate-otp'>Generate OTP</div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
          </Col>
        )}
        <div  className='submit-container'>
          <Col xs={12} sm={12} md={8} lg={8} className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</Col>
          <Col xs={12} sm={12} md={8} lg={8} className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</Col>
        </div>
      </Row>

  );
}



