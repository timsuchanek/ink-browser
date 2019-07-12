import React from 'react'
import { Box, Text } from 'ink'
import Spinner from 'ink-spinner';
import SelectInput from 'ink-select-input';

const handleSelect = () => {}

const items = [
  { label: 'SQLite', value: 'sqlite'},
  { label: 'MySQL', value: 'mysql'},
  { label: 'PostgreSQL', value: 'postgresql'}
]


export function InkExample() {
  return (
    <Box flexDirection="column">
      <Text bold>Select the database you want to use</Text>
      <Text>Learn how to set up a MySQL database: prisma.io/docs</Text>
      <Spinner />
      <SelectInput items={items} onSelect={handleSelect}/>
    </Box>
  )
}