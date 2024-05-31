
import { Box, Button, HStack, Heading, Input, List, SimpleGrid, VStack, useRadio, useRadioGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from 'axios';

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
    let [choosenOption, setChoosenOption] = useState("Chicken Alfredo")
    let [selectedDate, setSelectedDate] = useState("");
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'lunch-options',
        defaultValue: 'Chicken Alfredo',
        onChange: (value) => {
            console.log(value);
            setChoosenOption(value);
            choosenOption = value;
        },
        
    })
    const group = getRootProps()
    const onDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log("Selected Date: ", event.target.value);
    };

    const onSubmitButtonClick = async () => {
        console.log("Submit button clicked")
        // collect the input date 
        console.log("Choosen Option: ", choosenOption)
        console.log("Selected Date: ", selectedDate);

        try {
            const response = await axios.post('http://localhost:8081/menu', {
                "date": selectedDate,
                "options": choosenOption
              });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
        
    }
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
                        <Input placeholder='Select Date and Time' size='md' type="date" value={selectedDate} onChange={onDateChange} />
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
                    <Button colorScheme="teal" size="md" onClick={onSubmitButtonClick}> Confirm todays Lunch Option</Button>
                </VStack>
            </Box>
        </Box>

    );
}

export default AddMenu;

