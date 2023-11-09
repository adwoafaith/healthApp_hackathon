import React from 'react'
import Header from './Header'
import Styles from  '../../css-modules/dashboard/TeacherDashboardLayout.module.css'
import TableContent from './TableContent'
import UserAndStudentDetailsSidebar from './UserAndStudentDetailsSidebar'
import FilterBar from './FilterBar'
import { Divider } from '@mantine/core';
import TableActionsTab from './TableActionsTab'
import StudentStatusTab from './StudentStatusTab'

const TeacherDashboardLayout = () => {
  return (
    <section className={Styles.layout}>
        <div className={Styles.content}>
            <Header />
            <div className={Styles.card}>
              <TableActionsTab />
              <Divider size="xs" />
              <FilterBar />
              <Divider size="xs" />
              <StudentStatusTab />
              <TableContent />
            </div>
        </div>
        <UserAndStudentDetailsSidebar />
    </section>
  )
}

export default TeacherDashboardLayout