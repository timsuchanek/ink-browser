import React, { Component } from 'react'

import { Color, Box } from 'ink'

export function InkExample() {
  return (
    <Box width={50} justifyContent="space-between" flexDirection="column">
      <Color greenBright>Hello World</Color>
      <Color red>Normal text</Color>
    </Box>
  )
}
