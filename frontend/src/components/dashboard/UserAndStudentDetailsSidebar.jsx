import React from 'react'
import Styles from '../../css-modules/dashboard/UserAndStudentDetailsSidebar.module.css'
import UserDisplay from './UserDisplay'
import DeleteIcon from '../../assets/icons/delete-icon.svg'
import EditIcon from '../../assets/icons/edit-icon.svg'
import UploadIcon from '../../assets/icons/upload-icon.svg'

const UserAndStudentDetailsSidebar = () => {
  return (
    <div className={Styles.rightSideBar}>
        <UserDisplay />
        <div className={Styles.studentDetails}>
          <h3 className={Styles.headerTitle}>Student Details</h3>
          <div className={Styles.studentInfoBox}>
            <div className={Styles.studentInfoDetails}>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">REF ID</label>
                    <p className={Styles.value}>MA</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">FULL NAME</label>
                    <p className={Styles.value}>FRANK ADDO</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">CLASS</label>
                    <p className={Styles.value}>JHS 3</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">REF ID</label>
                    <p className={Styles.value}>23238</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">GENDER</label>
                    <p className={Styles.value}>FEMALE</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">EMAIL</label>
                    <p className={Styles.value}>michelleliton@gmail.com</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">TELEPHONE</label>
                    <p className={Styles.value}>+233 555 418 036</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">SUBJECT</label>
                    <p className={Styles.value}>I.C.T</p>
                </div>
                <div className={Styles.studentInfo}>
                    <label className={Styles.title} htmlFor="title">DATE CREATED</label>
                    <p className={Styles.value}>25TH september 2015</p>
                </div>
            </div>
            <div className={Styles.operationButtons}>
                <button className={Styles.button}>
                    <img src={UploadIcon} alt="Upload Icon" />
                </button>
                <button className={Styles.button}>
                    <img src={EditIcon} alt="Upload Icon" />
                </button>
                <button className={Styles.button}>
                    <img src={DeleteIcon} alt="Upload Icon" />
                </button>
                <button className={Styles.button}>
                    <img src={DeleteIcon} alt="Upload Icon" />
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserAndStudentDetailsSidebar