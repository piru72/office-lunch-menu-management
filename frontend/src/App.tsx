import { useState } from 'react'
import './App.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel, List } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box height="100vh" mb={10}>
      <Heading mb={20} >Office Lunch Menu Management System</Heading>
      <Tabs isFitted variant='enclosed' >
        <TabList mb='1em'>
          <Tab>Admin Interface</Tab>
          <Tab>Employee Interface</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <List>
              <ul>
                <li>Add Daily Menu Options: Admins can add new lunch options for specific dates.</li>
                <li>View Employee Choices: Admins can view which employees have chosen which lunch options.</li>
              </ul>
            </List>
          </TabPanel>
          <TabPanel>
            <List>
              <ul>
                <li>View Daily Menu: Employees can see the lunch options available for the current day.</li>
                <li>Select Lunch Choice: Employees can select their preferred lunch option from the daily menu.</li>
              </ul>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default App
