import React from "react";
import { Text, Paper } from "@mantine/core";

const CurrentAssignmentCourse = () => {
  return (
    <Paper shadow="sm" radius="xl" p="sm">
      <h3 style={{
        fontWeight: 600,
        color: '#000',

      }}>MATHEMATICS</h3>
      <p style={{
        fontSize: 10,
        fontWeight: 400,
        color: '#000',
        margin: '2rem 0'
      }}>7th November,2023</p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
      }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
        }}>
            <div style={{
                background: '#F4884C',
                color: '#fff',
                width: 25,
                height: 25,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 14,
            }}>
                10
            </div>
            <div>submitted</div>
        </div>
        <div style={{
            display: 'flex',
            gap: '.5rem',
            alignItems: 'center'
        }}>
            <div style={{
                background: '#F4884C',
                color: '#fff',
                width: 25,
                height: 25,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 14,
            }}>
                10
            </div>
            <div>submitted</div>
        </div>
      </div>
    </Paper>
  );
};

export default CurrentAssignmentCourse;
