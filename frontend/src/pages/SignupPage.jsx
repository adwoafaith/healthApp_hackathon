import React, { useState } from 'react'
import Styles from '../css-modules/signup/SignupPage.module.css'
import Brand from '../components/Brand';
import Kids from '../assets/images/login-image.svg'
import { Link, useNavigate } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import Checkbox from '@mui/material/Checkbox';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLock } from 'react-icons/ai';
import { TextInput, rem } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { MuiOtpInput } from 'mui-one-time-password-input'
import axios from 'axios';
import { checkPasswordHealth } from '../components/formValidation';

const SignupPage = () => {

  const [ formData, setFormData ] = useState(null)
  const [ opened, { open, close } ] = useDisclosure(false);
  const [ otp, setOtp ] = useState('');
  const [ validationDone, setValidationDone ] = useState(false)
  
  const navigate = useNavigate()

  const handleChange = (newValue) => {
    setOtp(newValue)
    setFormData({
      ...formData,
      ['otp']: newValue,
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const emailMatch = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  // const passwordMatch =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // console.log(formData);
    let validPassword = checkPasswordHealth(formData?.password)

    if(formData == null){
      alert("All fields are required!")
    } else {
      if(!formData?.email.match(emailMatch)) {
        alert("Please, provide a valid email.")
      } else {
        if(!validPassword.isValid) {
          alert(validPassword.errors)
        } else {
          if(formData?.password !== formData?.confirmPassword){
            alert("Password does not match.")
          } else {
            setValidationDone(true)
            axios.post('http://localhost:8000/api/v1/verify', formData)
            .then((response) => {
              setFormData({
                ...formData,
                ['token']: response.data.token
              })
            })
            .catch((err) => {
              console.log(err);
            })
          }
        }
      }
    }

  }

  const handleSubmit = async () => {

    await axios.post('http://localhost:8000/api/v1/signup', formData, {
      headers: {
      'Authorization': `Bearer ${formData.token}`,
      'Accept': 'application/json'
    }
    })
    .then((response) => {
      alert(response?.data?.message)
      navigate("/dashboard-parent")
    })
    .catch((error) => {
      alert(error?.response?.data?.message)
    })
  }

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

          {/* Modal for OTP authentication */}
          <Modal color='red' opened={opened} onClose={close} centered>
            <div className={Styles.modal}>
              <h3 className={Styles.title}>Account Confirmation</h3>
              <p className={Styles.subTitle}>Enter otp to confirm account</p>
              <MuiOtpInput value={otp} sx={{my: 5}} length={6} onChange={handleChange} />
            </div>
              <button onClick={handleSubmit} className={Styles.submitButton}>Submit</button> <br />
              <button onClick={() => setOtp('')} className={Styles.clearButton}>Clear</button> <br />
          </Modal>

          <form onSubmit={handleFormSubmit} className={Styles.formBox}>
            <div className={Styles.inputField}>
              <TextInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={mailIcon}
                placeholder="Email"
                name='email'
                onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <PasswordInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}
                placeholder="Password"
                name='password'
                onChange={handleInputChange}
              />
            </div>
            <div className={Styles.inputField}>
              <PasswordInput
                size='md'
                radius="md"
                leftSectionPointerEvents="none"
                leftSection={lockIcon}
                placeholder="Confirm Password"
                name='confirmPassword'
                onChange={handleInputChange}
              />
            </div>

            <div className={Styles.terms}>
              <Checkbox size="small" />
              <span>By registering, you agree to the <Link className={Styles.link} to={'/signup-2'}>Terms of use</Link> and <Link className={Styles.link} to={'/'}>Privacy Policy</Link>. </span>
            </div>

            <button className={Styles.button} onClick={open}>Create an account</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignupPage