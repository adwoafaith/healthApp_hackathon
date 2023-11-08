import React from 'react'
import Header from './Header'
import Styles from  '../../css-modules/dashboard/TeacherDashboardLayout.module.css'
import TableContent from './TableContent'
import UserAndStudentDetailsSidebar from './UserAndStudentDetailsSidebar'

const TeacherDashboardLayout = () => {
  return (
    <section className={Styles.layout}>
        <div className={Styles.content}>
            <Header />
            <TableContent />
        </div>
        <UserAndStudentDetailsSidebar />
    </section>
  )
}

export default TeacherDashboardLayout