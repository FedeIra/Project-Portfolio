/* built footer: */
import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IconButton, Button, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

const Icons = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {}, [user]);

  return (
    <div>
      <a
        href="https://www.linkedin.com/in/federico-irarr%C3%A1zaval-314b89a1/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <IconButton
          colorScheme="transparent"
          aria-label="Call Segun"
          size="lg"
          icon={<FaLinkedin size="1.7rem" color="white" />}
        />
      </a>
      <a
        href="https://github.com/FedeIra"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <IconButton
          colorScheme="transparent"
          aria-label="Call Segun"
          size="lg"
          icon={<FaGithub size="1.7rem" color="white" />}
        />
      </a>
      <a
        href="mailto: fedeirar@gmail.com"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <IconButton
          colorScheme="transparent"
          aria-label="Call Segun"
          size="lg"
          icon={<FaEnvelope size="1.7rem" color="white" />}
        />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5491167887879&text=Hey"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <IconButton
          colorScheme="transparent"
          aria-label="Call Segun"
          size="lg"
          icon={<FaWhatsapp size="1.7rem" color="white" />}
        />
      </a>
      {user ? (
        <Button colorScheme="transparent" mr={2}>
          {user}
        </Button>
      ) : (
        <>
          <Button
            colorScheme="transparent"
            borderColor={'white'}
            border={'1px'}
            mr={2}
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
          <Button
            colorScheme="transparent"
            borderColor={'white'}
            border={'1px'}
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </>
      )}
    </div>
  );
};

export default Icons;
