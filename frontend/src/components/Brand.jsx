import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/brand/momytor.svg'
import Styles from '../css-modules/Brand.module.css'

const Brand = () => {
  return (
    <Link to={'/'} className={Styles.brand}>
        <img src={Logo} className={Styles.logo} alt="Brand Logo" />
        <label className={Styles.logoText} htmlFor="logo's text">momytor</label>
    </Link>
  )
}

export default Brand