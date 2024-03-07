import React from "react";
import { Box, Text, Flex, Image, Divider } from "@chakra-ui/react";

export default function CommentCard({ username, text, date, id, deleteLocal }) {
  return (
    <Box
      border="1px"
      borderColor="gray.800"
      backgroundColor="black"
      color="gray.200"
      w="100%"
      borderRadius={0}
    >
      <Flex ml={7} mt={5} justify="space-between">
        <Flex>
          <Image
            borderRadius={100}
            src={
              "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
            }
            h={10}
          ></Image>
          <Text ml={4} fontFamily="Nunito" fontSize={28}>
            @{username}
          </Text>
        </Flex>
      </Flex>
      <Divider mt={5}></Divider>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        minH={20}
        m={5}
      >
        <Text>"{text}"</Text>
        <Text color="gray">{date}</Text>
      </Box>
    </Box>
  );
}
