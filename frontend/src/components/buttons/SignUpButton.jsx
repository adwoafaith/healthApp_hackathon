import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../../css-modules/components/Buttons.module.css'

const SignUpButton = () => {
  return <Link className={Styles.signUpButton} to={'/signup'}>Sign Up</Link>
}

export default SignUpButton