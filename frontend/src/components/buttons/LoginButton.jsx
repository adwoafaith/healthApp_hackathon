import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../../css-modules/components/Buttons.module.css'

const LoginButton = () => {
  return <Link className={Styles.loginButton} to={'/login'}>Log In</Link>
}

export default LoginButton