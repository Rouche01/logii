import React, { useState } from 'react';
import styles from './Signup.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import pageUrl from '../../components/router/pageUrl';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Spacer from '../../components/Spacer/Spacer';
import CustomSlide from '../../components/CustomSlide/CustomSlide';
import Slider from 'react-slick';
import { faUnlockAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';


const Signup = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const onSubmit = () => {
    console.log(email, password, confirmPassword);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidestoScroll: 1
  };

  return (
    <div className={styles.mainContainer}>
      <Row>
        <Col>
          <div className={styles.formCol}>
            <Link to={pageUrl.HOMEPAGE}><img className={styles.Logo} src={Logo} alt="Logii Logo" /></Link>
            <h1>Get Started</h1>
            <div className={styles.registerForm}>
              <Input type="text" label="Email Address" placeholder="Email Address" 
                nameAttr="email" changed={setEmail} iconType={faEnvelope} value={email}
              />
              <Input type="password" label="Password" placeholder="Password" 
                nameAttr="password" changed={setPassword} iconType={faUnlockAlt} value={password}
              />
              <Input type="password" label="Confirm Password" placeholder="Confirm Password" 
                nameAttr="confirmPassword" changed={setConfirmPassword} 
                iconType={faUnlockAlt} value={confirmPassword}
              />
              <Spacer>
                <Button width="100%" btnLabel="Sign Up" clicked={onSubmit} />
              </Spacer>
              <p className={styles.loginLink}>Have an Account? <Link to={pageUrl.LOGIN_PAGE}>Login</Link></p>
            </div>
            <div className={styles.linkGroup}>
              <Link to={pageUrl.HOMEPAGE}>Back to Website</Link>
              <Link className={styles.faded} to={pageUrl.TERMS_OF_SERVICE}>Terms of Service</Link>
              <Link className={styles.faded} to={pageUrl.PRIVACY_POLICY}>Privacy Policy</Link>
            </div>
          </div>
        </Col>
        <Col>
          <div className={styles.sliderCol}>
            <div>
              <h2>Track Your Deliveries with just a few clicks</h2>
              <div className={styles.sliderWrapper}>
                <Slider {...settings} className={styles.slider}>
                  <CustomSlide index={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </CustomSlide>
                  <CustomSlide index={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </CustomSlide>
                  <CustomSlide index={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </CustomSlide>
                </Slider>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}


export default Signup;