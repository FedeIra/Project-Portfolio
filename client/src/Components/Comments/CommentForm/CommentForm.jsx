import {
  Box,
  Flex,
  Text,
  Button,
  Center,
  Textarea,
  Divider,
} from "@chakra-ui/react";

const CommentForm = ({
  username,
  commentArea,
  errorCommentArea,
  handleTextAreaName,
  handleTextAreaComment,
  handleSubmitComment,
  user,
}) => {
  return (
    <Box
      border="2px"
      borderColor="gray.800"
      backgroundColor="rgba(4, 1, 19, 0.9)"
      color="gray.100"
      borderRadius={0}
    >
      <Text fontSize="2.5vh" ml="5vh" mt={5}>
        Leave your comment!
      </Text>
      <Divider mt={4} mb={4} />
      <Center flexDirection="column" alignItems="center" mb={5} mt={5} w="100%">
        <Textarea
          value={username}
          placeholder="Name or Company..."
          w="90%"
          border="2px"
          borderColor="gray.300"
          mb={5}
          onChange={handleTextAreaName}
        />
        <Textarea
          value={commentArea}
          placeholder="Type your comment here..."
          w="90%"
          border="2px"
          borderColor="gray.300"
          mb={5}
          onChange={handleTextAreaComment}
        />
      </Center>
      <Flex justifyContent="flex-end">
        {errorCommentArea ? (
          <Text mr={5} color="red">
            You must write at least 5 characters.
          </Text>
        ) : (
          <></>
        )}
        {!user?.token ? (
          <Button mr="5%" mb={5} backgroundColor="gray.400" borderRadius={0}>
            Login to Comment
          </Button>
        ) : (
          <Button
            mr="5%"
            mb={5}
            backgroundColor="gray.200"
            borderRadius={0}
            _hover={{ backgroundColor: "gray.400" }}
            onClick={handleSubmitComment}
            disabled={errorCommentArea}
          >
            Submit
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default CommentForm;
