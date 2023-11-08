import React from 'react'
import Styles from '../css-modules/signup/SecondSignup.module.css'
import Brand from '../components/Brand';
import Kids from '../assets/images/login-image.svg'
import { Link } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import { Progress, TextInput } from '@mantine/core';

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

          <div className={Styles.progress}>
            <Progress color="#F9E0A2" radius="xl" size="xl" value={33.333} />
          </div>

          <h1 className={Styles.title}>Let's create your account!</h1>

          <form action="#" className={Styles.formBox}>
            <div className={Styles.inputField}>
              <TextInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                placeholder="First name"
                name='email'
                // onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <TextInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                placeholder="Middle name"
                name='email'
                // onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <TextInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                placeholder="Last name"
                name='email'
                // onChange={handleInputChange}
              />
            </div>

            <button className={Styles.button}>Add name</button>

            <div className={Styles.terms}>
              <span>Your information is safe. Read our <Link className={Styles.link} to={'/'}>Privacy Policy</Link>. </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SecondSignupPage