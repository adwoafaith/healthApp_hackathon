import React from 'react'
import Styles from '../css-modules/signup/ThirdSignup.module.css'
import Brand from '../components/Brand';
import KidsWithParent from '../assets/images/a-man-with-kids.svg'
import { Link } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import { Progress, Select, TextInput, rem } from '@mantine/core';
import classes from '../css-modules/components/MantineInput.module.css';

const ThirdSignupPage = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={KidsWithParent} alt="Kids with thier parent" />
      </div>

      <div className={Styles.LoginForm}>
        <BackIcon />
        
        <div className={Styles.container}>
          <Brand />

          <div className={Styles.progress}>
            <Progress color="#F9E0A2" radius="xl" size="xl" value={66.666} />
          </div>

          <h1 className={Styles.title}>You are almost there!</h1>

          <form action="#" className={Styles.formBox}>
            <div className={Styles.inputField}>
              <Select
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                comboboxProps={{ withinPortal: true }}
                data={['Male', 'Female', 'Other']}
                placeholder="Gender"
                classNames={classes}
              />
            </div>
            <div className={Styles.inputField}>
                <TextInput
                  size='md'
                  radius="md"
                  type='number'
                  leftSectionPointerEvents="none"
                  placeholder="Phone number"
                  name='tel'
                  // onChange={handleInputChange}
                />
            </div>

            <button className={Styles.button}>Continue</button>

            <div className={Styles.terms}>
              <span>Your information is safe. Read our <Link className={Styles.link} to={'/'}>Privacy Policy</Link>. </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ThirdSignupPage