import React from 'react'
import Styles from '../css-modules/Login.module.css'
import Brand from '../components/Brand';
import Kids from '../assets/images/login-image.svg'
import { Link } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import { FaRegUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';

const LoginPage = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={Kids} alt="" />
      </div>

      <div className={Styles.LoginForm}>
        
        <BackIcon />

        <div className={Styles.container}>
          <Brand />

          <h1 className={Styles.title}>Sign In</h1>
          <p>Enter your credentials to access your account</p>

          <form action="#" className={Styles.formBox}>
            <div className={Styles.inputField}>
              <span className={Styles.icon}>
                <FaRegUser />
              </span>
              <select name="" id="">
                <option value="1">Teacher</option>
                <option value="2">Parent</option>
              </select>
            </div>
            <div className={Styles.inputField}>
              <span className={Styles.icon}>
                <FiMail />
              </span>
              <input type="text" placeholder='Email' />
            </div>
            <div className={Styles.inputField}>
              <span className={Styles.icon}>
                <AiOutlineLock />
              </span>
              <input type="password" placeholder='Password' />
            </div>

            <p>
              <Link className={Styles.forgotPassword} to={'/'}>Forgot your password?</Link>
            </p>

            <button className={Styles.button}>Sign In</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage