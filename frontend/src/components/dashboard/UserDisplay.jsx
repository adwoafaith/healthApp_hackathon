import React from 'react'
import Styles from '../../css-modules/dashboard/UserDisplay.module.css'
import ProfileImage from '../../assets/images/login-image.svg'

const UserDisplay = () => {
  return (
    <div className={Styles.profile}>
        <div className={Styles.profileImage}>
          <img src={ProfileImage} alt="Profile Picture" />
        </div>
        <h4>Username</h4>
    </div>
  )
}

export default UserDisplay