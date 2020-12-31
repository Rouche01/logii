import React, { useState } from 'react';
import styles from './Signin.module.scss';
import { Row, Col } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { faUnlockAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Signin = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return(
    <div className={styles.mainContainer}>
      <Row>
        <Col>
          <div className={styles.formCol}>
            <Link to='/'><img className={styles.Logo} src={Logo} alt="Logii Logo" /></Link>
            <h1>Login to your account</h1>
            <div className={styles.loginForm}>
              <Input type="text" label="Email Address" placeholder="Email Address" 
                nameAttr="email" iconType={faEnvelope} value={email} changed={setEmail}
              />
              <Input type="password" label="Password" placeholder="Password" 
                nameAttr="password" iconType={faUnlockAlt} value={password} changed={setPassword}
              />
              <Link to='/' className={styles.forgotPsw}>Forgot Password?</Link>
              <Button btnLabel="Sign In" width="100%" />
              <p className={styles.registerLink}>Not Registered Yet? <Link to='/signup'>Create An Account</Link></p>
            </div>
          </div>
        </Col>
        <Col>
          <div className={styles.sliderCol}>

          </div>
        </Col>
      </Row>
    </div>
  );
}


export default Signin;