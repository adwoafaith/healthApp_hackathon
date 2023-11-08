import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const TableContent = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table style={{width: '90%', margin: '0 auto', textAlign: 'center'}} stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{textAlign: 'center'}}>REF ID</Table.Th>
          <Table.Th style={{textAlign: 'center'}}>FULL NAME</Table.Th>
          <Table.Th style={{textAlign: 'center'}}>GENDER</Table.Th>
          <Table.Th style={{textAlign: 'center'}}>CLASS</Table.Th>
          <Table.Th style={{textAlign: 'center'}}>SUBJECT</Table.Th>
          <Table.Th style={{textAlign: 'center'}}>ATTENDANCE</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default TableContent;