import React from 'react'
import { Box, Text, Color } from 'ink'
import Spinner from 'ink-spinner'
import SelectInput from 'ink-select-input'
import TextInput from 'ink-text-input'
import MultiSelect from 'ink-multi-select'
import figures from 'figures'
import stringWidth from 'string-width'

// Divider
const Divider = ({
	title,
	width,
	padding,
	titlePadding,
	titleColor,
	dividerChar
}:
{
  title: string | null,
	width: number,
	padding: number,
	titlePadding: number,
	titleColor: string,
	dividerChar: string
}
) => {
  const getSideDividerWidth = (width: any, titleWidth: any) => (width - titleWidth) / 2
  const getNumberOfCharsPerWidth = (char: any, width: any) => width / stringWidth(char)
  const PAD = ' '
	const titleString = title ? `${PAD.repeat(titlePadding) + title + PAD.repeat(titlePadding)}` : ''
	const titleWidth = stringWidth(titleString)
	const dividerWidth = getSideDividerWidth(width, titleWidth)
	const numberOfCharsPerSide = getNumberOfCharsPerWidth(dividerChar, dividerWidth)
	const dividerSideString = dividerChar.repeat(numberOfCharsPerSide)
	const paddingString = PAD.repeat(padding)

	return (
		<Box>
			{paddingString}
			<Color gray>{dividerSideString}</Color>
			<Color keyword={titleColor}>{titleString}</Color>
			<Color gray>{dividerSideString}</Color>
			{paddingString}
		</Box>
	)
}

Divider.defaultProps = {
	title: null,
	width: 60,
	padding: 0,
	titlePadding: 1,
	titleColor: 'white',
	dividerChar: '─'
}

// Random
const blankEvent = () => {}

const databases = [
  { label: 'SQLite', value: 'sqlite' },
  { label: 'MySQL', value: 'mysql' },
  { label: 'PostgreSQL', value: 'postgresql' }
]

const tools = [
  { label: 'Photon', value: 'photon' },
  { label: 'Lift', value: 'lift' },
]

// Select Input
const selectInputItemComponent = ({isSelected, label}: any) => (
  <Color cyanBright={isSelected}>
    {label}
  </Color>
)

const selectInputIndicatorComponent = ({isSelected}: any) => (
  <Box marginRight={1}>
    { isSelected ? <Color cyanBright>{figures.pointer}</Color> : ' ' }
	</Box>
)

// Multi Select
const multiSelectItemComponent = ({isHighlighted, label}: any) => (
  <Color cyanBright={isHighlighted}>
    {label}
  </Color>
)

const multiSelectIndicatorComponent = ({isHighlighted}: any) => (
  <Box marginRight={1}>
    { isHighlighted ? <Color cyanBright>{figures.pointer}</Color> : ' ' }
  </Box>
)

const multiSelectCheckboxComponent = ({isSelected}: any) => (
  <Box marginRight={1}>
    <Color cyanBright>{isSelected ? figures.squareSmallFilled : figures.checkboxOff}</Color>
  </Box>
)

// Ink Example
export function InkExample() {
  return (
    <Box flexDirection="column" padding={1}>

      <Box flexDirection="column">
        <Text bold>Select the database you want to use</Text>
        <Divider />
      </Box>

      <Box marginBottom={10}>
        <Box width={20} flexDirection="column">
          <SelectInput
            items={databases}
            onSelect={blankEvent}
            itemComponent={selectInputItemComponent}
            indicatorComponent={selectInputIndicatorComponent} />
          <Box marginLeft={2}><Color gray>MongoDB</Color></Box>
        </Box>
        <Box flexDirection="column">
          <Color gray>Easies to set up</Color>
          <Color gray>Requires running a MySQL database</Color>
          <Color gray>Requires running a PostgreSQL database</Color>
          <Color gray>(Coming soon)</Color>
        </Box>
      </Box>



      <Box flexDirection="column">
        <Text bold>How do you want to proceed?</Text>
        <Divider />
      </Box>

      <Box marginBottom={10}>
        <Box width={40}>
          <SelectInput
            items={[{ label: 'Create new SQLite file', value: 'new-sqlite' }, { label: 'Use existing SQLite file', value: 'existing-sqlite' }]}
            onSelect={blankEvent}
            itemComponent={selectInputItemComponent}
            indicatorComponent={selectInputIndicatorComponent} />
        </Box>
        <Box flexDirection="column">
          <Color gray>Easy setup to start from scratch</Color>
          <Color gray>Requires the path to the file</Color>
        </Box>
      </Box>



      <Box flexDirection="column">
        <Text bold>Select the programming language to access your database with Photon</Text>
        <Divider />
      </Box>

      <Box marginBottom={10}>
        <Box width={40} flexDirection="column">
          <SelectInput
            items={[{ label: 'JavaScript', value: 'javascript' }, { label: 'TypeScript', value: 'typescript' }]}
            onSelect={blankEvent}
            itemComponent={selectInputItemComponent}
            indicatorComponent={selectInputIndicatorComponent} />
          <Box marginLeft={2}><Color gray>Go (Coming soon)</Color></Box>
        </Box>
      </Box>



      <Box flexDirection="column">
        <Text bold>Select a boilerplate or start with just the Prisma schema</Text>
        <Divider />
      </Box>

      <Box marginBottom={10}>
        <Box width={30}>
          <SelectInput
            items={[{ label: 'Basic boilerplate', value: 'basic' }, { label: 'GraphQL boilerplate', value: 'graphql' }, { label: 'REST boilerplate', value: 'rest' }, { label: 'gRPC boilerplate', value: 'grpc' }]}
            onSelect={blankEvent}
            itemComponent={selectInputItemComponent}
            indicatorComponent={selectInputIndicatorComponent} />
        </Box>
        <Box flexDirection="column">
          <Color gray>Simple script with API examples</Color>
          <Color gray>GraphQL server example</Color>
          <Color gray>REST API example (using express.js)</Color>
          <Color gray>gRPC API example (client + server)</Color>
        </Box>
      </Box>



      <Box flexDirection="column">
        <Text bold>Enter MySQL credentials</Text>
        <Color white>Learn how to set up a MySQL database: <Text underline>prisma.io/docs</Text></Color>
        <Divider />
      </Box>

      <Box flexDirection="column">
        <Box marginLeft={2}>
          <Box marginRight={1}>Host:</Box>
          <TextInput value="" placeholder="127.0.0.1" onChange={blankEvent} />
        </Box>
        <Box marginLeft={2}>
          <Box marginRight={1}>Port:</Box>
          <TextInput value="" placeholder="3306" onChange={blankEvent} />
        </Box>
        <Box marginLeft={2}>
          <Box marginRight={1}>User:</Box>
          <TextInput value="" onChange={blankEvent} />
        </Box>
        <Box marginLeft={2}>
          <Box marginRight={1}>Password:</Box>
          <TextInput value="" onChange={blankEvent} />
        </Box>
        <Box marginLeft={2}>
          <Box marginRight={1}>Database (optional):</Box>
          <TextInput value="" onChange={blankEvent} />
        </Box>
        <Box marginTop={1}>
          <MultiSelect
            focus={false}
            items={[{ label: 'Use SSL', value: 'use-ssl' }]}
            onSelect={blankEvent}
            itemComponent={multiSelectItemComponent}
            indicatorComponent={multiSelectIndicatorComponent}
            checkboxComponent={multiSelectCheckboxComponent} />
        </Box>
      </Box>

      <Divider />

      <Box flexDirection="column">
        <Box marginLeft={2}>
          <Box marginRight={1}>Or URL:</Box>
          <TextInput value="" placeholder="mysql://localhost:3306/admin" onChange={blankEvent} />
        </Box>
      </Box>

      <Divider />

      {/* <MultiSelect
        items={tools}
        onSelect={blankEvent}
        itemComponent={multiSelectItemComponent}
        indicatorComponent={multiSelectIndicatorComponent}
        checkboxComponent={multiSelectCheckboxComponent} /> */}
    </Box>
  )
}