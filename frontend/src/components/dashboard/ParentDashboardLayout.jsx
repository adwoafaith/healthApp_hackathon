import React from 'react'
import CurrentAssignments from './parent/CurrentAssignments'
import UpcomingEvents from './parent/UpcomingEvents'
import Calender from './parent/Calender'
import AttendanceAndAssignment from './parent/AttendanceAndAssignment'
import Styles from '../../css-modules/dashboard/ParentDashboardLayout.module.css'

const ParentDashboardLayout = () => {
  return (
    <>
        <header>
            <h3>Hello <br /> <span>Mr Emmanuel</span></h3>
        </header>
        <div className={Styles.topBox}>
            <CurrentAssignments />
            <UpcomingEvents />
            <Calender />
        </div>
        <div className={Styles.bottomBox}>
            <AttendanceAndAssignment />
        </div>
    </>
  )
}

export default ParentDashboardLayout