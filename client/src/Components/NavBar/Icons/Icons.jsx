/* built footer: */
import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Icons = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/federico-irarr%C3%A1zaval-314b89a1/"
        target="_blank"
        rel="nofollow"
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
    </div>
  );
};

export default Icons;
