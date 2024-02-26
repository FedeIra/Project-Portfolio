import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Center,
  FormControl,
  Link,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

import { logIn } from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [incomplete, setIncomplete] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userLogin, setUser] = useState({
    displayName: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
    if (userLogin.password.length < 6 || userLogin.displayName.length < 6) {
      setIncomplete(false);
      return;
    }
    setIncomplete(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userForm = {
      userName: userLogin.displayName,
      password: userLogin.password,
    };
    const response = await dispatch(logIn(userForm));
    if (response.type === 'LOG_IN_FAILURE') {
      return;
    }
    navigate('/');
  };

  return (
    <Box
      position={'relative'}
      height={'100vh'}
      backgroundColor={'#rgba(4, 1, 19, 0.9)'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
    >
      <Container
        display="flex"
        justifyContent="center"
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}></Stack>
        <Stack
          bg={'rgba(4, 1, 19, 0.9)'}
          backdropFilter={'blur(10px)'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Flex justify="center" align="center" h="60px">
            <Heading
              color={'white'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Log in!
            </Heading>
          </Flex>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <FormControl>
                <Input
                  placeholder="Your Username"
                  bg={'gray.100'}
                  border={0}
                  name="displayName"
                  type="text"
                  id={1}
                  value={userLogin.displayName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="Your Password"
                  type="password"
                  bg={'gray.100'}
                  border={0}
                  marginTop={'20px'}
                  id={2}
                  autoComplete={'none'}
                  name="password"
                  value={userLogin.password}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Center>
                  {!incomplete && (
                    <Text color={'#cd6155'} fontWeight={'600'}>
                      Add your password
                    </Text>
                  )}
                </Center>
                <Button
                  fontFamily={'heading'}
                  mt={8}
                  w={'full'}
                  backgroundColor={'gray.800'}
                  color={'white'}
                  onClick={handleSubmit}
                  _hover={{
                    backgroundColor: 'gray.600',
                    boxShadow: 'xl',
                  }}
                >
                  Log in
                </Button>
              </FormControl>
            </Stack>
          </Box>
          <Stack
            direction={{ base: 'flex', sm: 'row' }}
            gap={1}
            justifyContent={'center'}
          >
            <Text color={'white'}>¿First Time here? </Text>
            <Link href="/register" color={'gray'}>
              Sign up
            </Link>
          </Stack>
          <Stack
            direction={{ base: 'flex', sm: 'row' }}
            align={'start'}
            justify={'space-evenly'}
            color={'gray'}
            _hover={{ textDecoration: 'block' }}
          ></Stack>
        </Stack>
      </Container>
    </Box>
  );
}
