import React, { useState } from 'react';
import styles from './Signin.module.scss';
import { Row, Col } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { faUnlockAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import pageUrl from '../../components/router/pageUrl';
import CustomSlide from '../../components/CustomSlide/CustomSlide';

const Signin = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmit = () => {
    console.log(email, password);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidestoScroll: 1
  };

  return(
    <div className={styles.mainContainer}>
      <Row>
        <Col>
          <div className={styles.formCol}>
            <Link to={pageUrl.HOMEPAGE}><img className={styles.Logo} src={Logo} alt="Logii Logo" /></Link>
            <h1>Login to your account</h1>
            <div className={styles.loginForm}>
              <Input type="text" label="Email Address" placeholder="Email Address" 
                nameAttr="email" iconType={faEnvelope} value={email} changed={setEmail}
              />
              <Input type="password" label="Password" placeholder="Password" 
                nameAttr="password" iconType={faUnlockAlt} value={password} changed={setPassword}
              />
              <Link to='/' className={styles.forgotPsw}>Forgot Password?</Link>
              <Button btnLabel="Sign In" width="100%" clicked={onSubmit} />
              <p className={styles.registerLink}>Not Registered Yet? 
                <Link to={pageUrl.REGISTER_PAGE}> Create An Account</Link>
              </p>
            </div>
          </div>
          <div className={styles.linkGroup}>
            <Link to={pageUrl.HOMEPAGE}>Back to Website</Link>
            <Link className={styles.faded} to={pageUrl.TERMS_OF_SERVICE}>Terms of Service</Link>
            <Link className={styles.faded} to={pageUrl.PRIVACY_POLICY}>Privacy Policy</Link>
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


export default Signin;