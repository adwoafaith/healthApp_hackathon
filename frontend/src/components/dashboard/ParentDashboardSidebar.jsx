import React from "react";
import Styles from "../../css-modules/dashboard/ParentDashboardSidebar.module.css";
import ParentDashboardLayout from "./ParentDashboardLayout";
import ProfilePicture from "../../assets/images/parents-helping-children-wit-homework.svg";
import ArrowImage from '../../assets/icons/arrow.svg'
import Performance from '../../assets/icons/Vector.svg'

const ParentDashboardSidebar = () => {
  return (
    <>
      <div className={Styles.sidebar}>
        <div className={Styles.profileBox}>
          <div className={Styles.profile}>
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
        </div>
        <a className={Styles.active} href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        <ul className={Styles.logoutAndPerformance}>
            <li>
                <div></div>
                <span>Logout</span>
                <img src={ArrowImage} alt="arrow" />
            </li>
            <li>
                <img src={Performance} alt="performance" />
                <span>Performance</span>
                <img src={ArrowImage} alt="arrow" />
            </li>
        </ul>
      </div>

      <div className={Styles.content}>
        <ParentDashboardLayout />
      </div>
    </>
  );
};

export default ParentDashboardSidebar;
