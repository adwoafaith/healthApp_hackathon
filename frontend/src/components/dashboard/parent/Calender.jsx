import React from "react";
import { Text, Paper } from "@mantine/core";
import { Calendar } from '@mantine/dates';

const Calender = () => {
  return (
    <Paper shadow="sm" radius="md" p="xl">
      {/* <Text>Paper is the most basic ui component</Text> */}
      <Calendar />
    </Paper>
  );
};

export default Calender;
