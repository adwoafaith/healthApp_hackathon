import React from 'react'
import Styles from '../../css-modules/dashboard/UserAndStudentDetailsSidebar.module.css'
import UserDisplay from './UserDisplay'

const UserAndStudentDetailsSidebar = () => {
  return (
    <div className={Styles.rightSideBar}>
        <UserDisplay />
        <div className={Styles.studentDetails}>
          <h3>Student Details</h3>
          <div className={Styles.studentInfoBox}>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
            <div className={Styles.studentInfo}>
                <label className={Styles.title} htmlFor="title">REF ID</label>
                <p className={Styles.value}>23238</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserAndStudentDetailsSidebar