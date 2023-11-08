import React from 'react'
import Styles from '../css-modules/signup/SuccessSignup.module.css'
import Brand from '../components/Brand';
import ManWithAGirl from '../assets/images/a-man-with-a-small-girl.svg'
import BackIcon from '../components/BackIcon';
import { Progress } from '@mantine/core';

const SuccessSignupPage = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={ManWithAGirl} alt="A man with a small girl" />
      </div>

      <div className={Styles.rightContainer}>
        <BackIcon />
        
        <div className={Styles.container}>
          <Brand />

          <div className={Styles.progress}>
            <Progress color="#F9E0A2" radius="xl" size="xl" value={100} />
          </div>

          <h1 className={Styles.title}>Hurray! your account has been successfully created.</h1>

          <p className={Styles.text}>
            A one in all application which allows parents to know the performance of their wards 
            anywhere anytime with ease.
          </p>

          <p className={Styles.text}>
            A one in all application which allows parents to know the performance of their 
            wards anywhere anytime with ease.
          </p>

          <p className={Styles.text}>
            A one in all application which allows parents to know the performance of their wards 
            anywhere anytime with ease.
          </p>

          <button className={Styles.button}>Create an account</button>
        </div>
      </div>
    </section>
  )
}

export default SuccessSignupPage