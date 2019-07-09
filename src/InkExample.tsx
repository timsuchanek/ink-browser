import React, { Component } from 'react'

import { Color, Box } from 'ink'

export function InkExample() {
  return (
    <Box justifyContent="space-between" width="50">
      <Box flexDirection="column">
        <Color greenBright>Hello World</Color>
        <Color green>Hello World</Color>
        <Color red>Normal text</Color>
      </Box>
      <Box flexDirection="column">
        <Color greenBright>Hello World</Color>
        <Color green>Hello World</Color>
        <Color red>Normal text</Color>
      </Box>
    </Box>
  )
}
