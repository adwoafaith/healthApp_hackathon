import React from 'react'
import Styles from '../css-modules/Signup.module.css'
import Brand from '../components/Brand';
import Kids from '../assets/images/login-image.svg'
import { Link } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import Checkbox from '@mui/material/Checkbox';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';

const SecondSignupPage = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={Kids} alt="A man with kids" />
      </div>

      <div className={Styles.LoginForm}>
        
        <BackIcon />

        <div className={Styles.container}>
          <Brand />

          <h1 className={Styles.title}>Let's create your account!</h1>

          <form action="#" className={Styles.formBox}>
            <div className={Styles.inputField}>
              <input type="text" placeholder='Email' required />
            </div>
            <div className={Styles.inputField}>
              <input type="password" placeholder='Password' required />
            </div>

            <div className={Styles.inputField}>
              <input type="password" placeholder='Confirm Password' required />
            </div>

            <div className={Styles.terms}>
              <span>By registering, you agree to the <Link className={Styles.link} to={'/'}>Terms of use</Link> and <Link className={Styles.link} to={'/'}>Privacy Policy</Link>. </span>
            </div>

            <button className={Styles.button}>Create an account</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SecondSignupPage