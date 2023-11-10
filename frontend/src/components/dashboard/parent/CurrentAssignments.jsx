import React from 'react'
import { Text, Paper } from '@mantine/core';
import CurrentAssignmentCourse from './CurrentAssignmentCourse';

const CurrentAssignments = () => {
  return (
    <Paper shadow="sm" radius="md" p="xl">
      <h2 style={{
        fontWeight: 600,
        color: '#000',
        fontSize: '1.2rem'

      }}>Current Assignment</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        <CurrentAssignmentCourse />
        <CurrentAssignmentCourse />
        <CurrentAssignmentCourse />
        <CurrentAssignmentCourse />
      </div>
    </Paper>
  )
}

export default CurrentAssignments