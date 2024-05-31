
import { Box, Button, HStack, Heading, Input, List, SimpleGrid, VStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import React from "react";

const lunchItems = [
    "Chicken Alfredo",
    "Chicken Caesar Salad",
    "Chicken Tenders",
    "Chicken Wings",
    "Chicken Wrap",
    "Chicken Quesadilla",
    "Chicken Sandwich",
    "Chicken Fried Rice",
    "Pizza",
    "Pasta",
]
function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
const AddMenu = () => {
    const options = lunchItems

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'lunch-options',
        defaultValue: 'Chicken Alfredo',
        onChange: console.log,
    })
    const group = getRootProps()
    return (
        <Box height="100vh" mb={10}>
            <List>
                <ul>
                    <li>Add Daily Menu Options: Admins can add new lunch options for specific dates.</li>
                    <li>View Employee Choices: Admins can view which employees have chosen which lunch options.</li>
                </ul>
            </List>
            <Box>
                <Heading m={10} size='xl' >Add Daily Menu Options</Heading>
                <VStack spacing={4} align='stretch'>
                    <HStack>
                        <Box>Choose Lunch Option:</Box>
                    </HStack>

                    <Box>
                        <Input placeholder='Select Date and Time' size='md' type="date" />
                    </Box>

                    <Box>
                        <SimpleGrid columns={5} spacing={10} {...group}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </SimpleGrid>
                    </Box>
                    <Button colorScheme="teal" size="md"> Confirm todays Lunch Option</Button>
                </VStack>
            </Box>
        </Box>

    );
}

export default AddMenu;

