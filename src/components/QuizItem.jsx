import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { RadioGroup, Radio } from "./ui/radio";
import { useState } from "react";

export const QuizItem = (quiz) => {
    const { ele , handleSubmit} = quiz;
    const [ selectedOption, setSelectedOption ] = useState("")
    const [ showResult, setShowResult ] = useState(false);
    const [ feedback, setFeedback ] = useState("")
 
    const handleValue = (e) => {
        console.log(e.value)
        setSelectedOption(e.value)
        handleSubmit(e.value)
    }

    const handleClick = () => {
        setShowResult(!showResult)
        if (!showResult){
            if(selectedOption === ele.answer){
                setFeedback(`Correct, the answer is ${ele.answer}` )
            }
            else{
                setFeedback(`Incorrect, the answer is ${ele.answer}`)
            }
        }
    }

    return (
        <>
        <Box
        p={4}
        boxShadow={"lg"}
        borderWidth={2}
        borderRadius={8}
        >
            <Text
            fontWeight={"bolder"}
            p={2}
            >{ele.id}. {ele.question}</Text>
            <RadioGroup
            value={selectedOption}
            onValueChange={handleValue}
            >
                <Stack
                gap={4}
                >
                    {ele.options.map((option) => {
                        return (
                        <Box key={option}
                        p={2}
                        bg={
                            showResult
                                ? option == ele.answer
                                    ? "green.100"
                                    : option === selectedOption
                                    ? "red.100"
                                    : "white"
                                : "white"
                        }
                        >
                            <Radio value={option}>{option}</Radio>
                        </Box>
                        )
                    })}
                </Stack>
            </RadioGroup>
            <Button
            mt={4}
            color={"white"}
            backgroundColor={"red.500"}
            onClick={handleClick}
            >{showResult ? "Hide" : "Show Answer"}</Button>
            {showResult &&             
            <Text>{feedback}</Text>
            }
        </Box>
        </>
    )
}