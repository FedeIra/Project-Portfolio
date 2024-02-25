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

export default function Login() {
  const [error, setError] = useState();
  const [notFound, setNotFound] = useState();
  const [incomplete, setIncomplete] = useState(true);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     if (!user.password) {
  //       setIncomplete(false);
  //     } else {
  //       setIncomplete(true);
  //     }
  //     await login(user.username, user.password);
  //   } catch (error) {
  //     if (error.message.includes('wrong')) {
  //       setError(true);
  //     } else {
  //       setError(false);
  //     }
  //     if (error.message.includes('not-found')) {
  //       setNotFound(true);
  //     } else {
  //       setNotFound(false);
  //     }
  //   }
  //   setLoading(false);
  // }

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
                  username="username"
                  type="usermail"
                  id={1}
                  value={user.username}
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
                  value={user.password}
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
                  )}{' '}
                </Center>
                <Button
                  fontFamily={'heading'}
                  mt={8}
                  w={'full'}
                  backgroundColor={'gray.800'}
                  color={'white'}
                  /* onClick={handleSubmit} */
                  _hover={{
                    backgroundColor: 'gray.600',
                    boxShadow: 'xl',
                  }}
                >
                  Log in
                </Button>

                <Center>
                  {error && (
                    <Text color={'#cd6155'} fontWeight={'600'}>
                      Wrong password
                    </Text>
                  )}
                  {notFound && (
                    <Text color={'#cd6155'} fontWeight={'600'}>
                      User not found
                    </Text>
                  )}{' '}
                </Center>
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
