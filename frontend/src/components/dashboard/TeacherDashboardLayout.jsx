import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from './Header'
import Styles from  '../../css-modules/dashboard/TeacherDashboardLayout.module.css'
import TableContent from './TableContent'
import UserAndStudentDetailsSidebar from './UserAndStudentDetailsSidebar'
import FilterBar from './FilterBar'
import { Divider } from '@mantine/core';
import TableActionsTab from './TableActionsTab'
import StudentStatusTab from './StudentStatusTab'
import axios from 'axios'

const TeacherDashboardLayout = () => {

  const [ childData, setChildData ] = useState(null);

  const getChildDetails = async () => {
    await axios.get('http://localhost:8000/api/v1/findAllChildren')
    .then((response) => {
      // console.log(response.data.child);
      setChildData(response.data.child)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getChildDetails();
  }, [])

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
              <TableContent childData={childData} />
            </div>
        </div>
        <UserAndStudentDetailsSidebar childData={childData} />
    </section>
  )
}

export default TeacherDashboardLayout