import { Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={10}
        gap={5}
        >
        <Heading
        fontWeight={"bolder"}
        size={"3xl"}
        fontFamily={"arial"}
        p={6}
        >🎉Welcome to the Quiz App!</Heading>
        <Text
        fontFamily={"sans"}
        fontWeight={"bold"}
        color={"blackAlpha.800"}
        >
            Test your Knowledge and challenge yourself with our quiz. Please <Link to="/login" style={{color:"blue"}}>Login</Link> to get started.
        </Text>
        </Flex>
    )
}