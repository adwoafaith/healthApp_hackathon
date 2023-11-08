import React from 'react'
import Styles from '../css-modules/Signup.module.css'
import Brand from '../components/Brand';
import Kids from '../assets/images/login-image.svg'
import { Link } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import Checkbox from '@mui/material/Checkbox';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { TextInput, rem } from '@mantine/core';
import { PasswordInput } from '@mantine/core';

const SignupPage = () => {

  const mailIcon = <FiMail style={{ width: rem(12), height: rem(12) }} />;
  const lockIcon = <AiOutlineLock style={{ width: rem(12), height: rem(12) }} />;

  return (
    <section className={Styles.section}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={Kids} alt="A man with kids" />
      </div>

      <div className={Styles.LoginForm}>
        
        <BackIcon />

        <div className={Styles.container}>
          <Brand />

          <h1 className={Styles.title}>Create your parent account for free!</h1>

          <form action="#" className={Styles.formBox}>
            <div className={Styles.inputField}>
              <TextInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={mailIcon}
                placeholder="Email"
                name='email'
                // onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <PasswordInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}
                placeholder="Password"
              />
            </div>
            <div className={Styles.inputField}>
              <PasswordInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}
                placeholder="Confirm Password"
              />
            </div>

            <div className={Styles.terms}>
              <Checkbox size="small" />
              <span>By registering, you agree to the <Link className={Styles.link} to={'/signup-2'}>Terms of use</Link> and <Link className={Styles.link} to={'/'}>Privacy Policy</Link>. </span>
            </div>

            <button className={Styles.button}>Create an account</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignupPage