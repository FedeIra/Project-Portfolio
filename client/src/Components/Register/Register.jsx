import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Center,
  Link,
  FormControl,
  useToast,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { signUp } from "../../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [validName, setValidName] = useState(true);
  const [validPass, setValidPass] = useState(true);

  const [userLog, setUser] = useState({
    displayName: "",
    password: "",
    error: false,
    errorMessage: "",
  });

  useEffect(() => {
    if (userLog.error) {
      toast({
        title: "Error.",
        description: userLog.errorMessage,
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    } else if (userLog.errorMessage === "No error") {
      toast({
        title: "Welcome!",
        description: "You are now registered.",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  }, [userLog.error, userLog.errorMessage, toast]);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...userLog,
      [e.target.name]: e.target.value,
    });
    if (userLog.displayName.length < 6) {
      setValidName(false);
      return;
    }
    setValidName(true);
    if (userLog.password.length < 6) {
      setValidPass(false);
      return;
    }
    setValidPass(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userForm = {
      userName: userLog.displayName,
      password: userLog.password,
    };
    try {
      const response = await dispatch(signUp(userForm));
      if (response === "Username already exists.") {
        setUser({
          displayName: "",
          password: "",
          error: true,
          errorMessage: response,
        });
        return;
      }
      setUser({
        errorMessage: "No error",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setUser({
        ...userLog,
        error: true,
        errorMessage: "Error signing up. Please try again.",
      });
    }
  };

  return (
    <div>
      <Box
        position={"relative"}
        height={"100vh"}
        backgroundColor={"#rgba(4, 1, 19, 0.9)"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Stack
            bg={"rgba(4, 1, 19, 0.9)"}
            backdropFilter={"blur(10px)"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Flex justify="center" align="center" h="60px">
                <Heading
                  color={"white"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Sign Up!
                </Heading>
              </Flex>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack spacing={1}>
                <Input
                  placeholder="Username"
                  bg={"gray.100"}
                  border={0}
                  name="displayName"
                  type="text"
                  value={userLog.displayName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Center>
                  {!validName && (
                    <Text color={"#cd6155"} fontWeight={"600"}>
                      Username must be at least 6 characters long
                    </Text>
                  )}
                </Center>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    bg={"gray.100"}
                    border={0}
                    id={3}
                    autoComplete={"none"}
                    marginTop={"20px"}
                    name="password"
                    value={userLog.password}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Center>
                    {!validPass && (
                      <Text color={"#cd6155"} fontWeight={"600"}>
                        Password must be at least 6 characters long
                      </Text>
                    )}
                  </Center>
                  <Button
                    fontFamily={"heading"}
                    mt={8}
                    w={"full"}
                    backgroundColor={"gray.800"}
                    color={"white"}
                    onClick={handleSubmit}
                    _hover={{
                      backgroundColor: "gray.600",
                      boxShadow: "xl",
                    }}
                  >
                    Sign Up
                  </Button>
                </FormControl>
              </Stack>
            </Box>
            <Stack
              direction={{ base: "flex", sm: "row" }}
              gap={1}
              justifyContent={"center"}
            >
              <Text color={"white"}>Are you already registered? </Text>
              <Link href="/login" color={"gray"}>
                Log in
              </Link>
            </Stack>
          </Stack>
        </Container>
        <Box
          position="absolute"
          top={window.innerWidth < 769 ? "0.5rem" : "2rem"}
          left={window.innerWidth < 769 ? "0.5rem" : "2rem"}
        >
          <Button
            backgroundColor={"rgba(4, 1, 19, 0.9)"}
            size={window.innerWidth < 769 ? "sm" : "lg"}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Box>
      </Box>
    </div>
  );
}
