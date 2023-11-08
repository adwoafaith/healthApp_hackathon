import React from 'react'
import TeacherDashboardSidebar from '../components/dashboard/TeacherDashboardSidebar'
import Header from '../components/dashboard/Header'
import '../css-modules/dashboard/TeacherDashboard.module.css'
import TeacherDashboardLayout from '../components/dashboard/TeacherDashboardLayout'

const TeacherDashboard = () => {
  return (
    <main>
        <TeacherDashboardSidebar />
        <TeacherDashboardLayout />
    </main>
  )
}

export default TeacherDashboard