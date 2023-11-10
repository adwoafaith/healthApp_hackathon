import React from 'react'
import Styles from '../../css-modules/dashboard/UserDisplay.module.css'
import ProfileImage from '../../assets/images/login-image.svg'
import LogoutIcon from '../../assets/icons/logout.svg'

const UserDisplay = () => {
  return (
    <div className={Styles.profile}>
      <div className={Styles.profileImageAndUsername}>
        <div className={Styles.profileImage}>
          <img src={ProfileImage} alt="Profile Picture" />
        </div>
      <h4>Hello Amy!</h4>
      </div>
      <img src={LogoutIcon} alt="Logout Icon" />
    </div>
  )
}

export default UserDisplay