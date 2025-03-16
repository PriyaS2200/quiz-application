import { fetch } from "@/redux/actions/quizAction"
import { Box, Button, Container, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { QuizItem } from "./QuizItem"

export const Quiz = () => {
    const dispatch = useDispatch()
    const { quiz } = useSelector(state => state.quiz)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        dispatch(fetch())
        setQuestions(quiz.questions)
    }, [])

    console.log(questions)

    const handleSubmit = (answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answer;
        setAnswers(updatedAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    return (
        <>
            <Container centerContent maxW={"container.md"} py={10}>
                <Box p={6} borderWidth={2} boxShadow={"lg"} w="full">
                    <Heading as="h1" size="2xl" textAlign={"center"} p={4}>
                        Take The Quiz
                    </Heading>
                    {questions.length > 0 &&
                        questions.map((ele) => {
                            return <QuizItem ele={ele} key={ele.id} handleSubmit={handleSubmit} />;
                        })}
                    <Button
                        mt={4}
                        ml={"45%"}
                        backgroundColor={"blue.400"}
                        onClick={handleSubmit}
                    >Submit</Button>
                </Box>
            </Container>
        </>
    )
}