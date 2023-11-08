import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../css-modules/components/Navbar.module.css'
import SignUpButton from './buttons/signUpButton'
import Brand from './Brand'

const Navbar = () => {
  return (
    <nav className={Styles.navBar}>
        
        <Brand />

        <ul className={Styles.navLinks}>
            <li>
                <Link className={Styles.navLink} to={'/'}>About Us</Link>
            </li>
            <li>
                <Link className={Styles.navLink} to={'/'}>Services</Link>
            </li>
            <li>
                <Link className={Styles.navLink} to={'/login'}>Log in</Link>
            </li>
            <li>
                <SignUpButton />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar