import { login } from "@/redux/actions/authAction";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleEnter = () => {
        if(email.trim() && password.trim()){
            dispatch(login(email, password))
            setEmail('')
            setPassword('')
            navigate('/quiz')
        }
        else {
            alert("All fields are required!")
        }
    }
    return (
        <Box
            maxW={"sm"}
            mx={"auto"}
            borderWidth={1}
            mt={10}
            boxShadow={"lg"}
            borderRadius={10}
        >
            <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={4}
                mt={5}
                gap={5}
            >
                <Heading
                    textAlign={"center"}
                    color={"blue.500"}
                    size={"2xl"}
                >Login</Heading>
                <Input size={"lg"} type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input size={"lg"} type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    backgroundColor={"blue.400"}
                    onClick={handleEnter}
                >Login</Button>
            </Flex>
        </Box>
    )
}