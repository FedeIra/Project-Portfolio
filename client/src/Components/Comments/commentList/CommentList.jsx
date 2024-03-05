// Import external dependencies:
import { Flex, Text, Center } from "@chakra-ui/react";

// Import local dependencies:
import CommentCard from "../CommentCard/CommentCard.jsx";

const CommentList = ({ comments }) => (
  <Flex
    maxH={500}
    overflow="auto"
    flexDirection="column"
    alignItems="center"
    css={{
      "&::-webkit-scrollbar": {
        backgroundColor: "rgba(4, 1, 19, 0.9)",
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        width: "1px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "white",
        borderRadius: "24px",
      },
    }}
  >
    {comments && comments.length > 0 ? (
      comments.map((comment) => {
        return (
          <CommentCard
            key={comment._id}
            username={comment.username}
            text={comment.content}
            date={comment.date}
            id={comment._id}
            deleteLocal={comments}
          ></CommentCard>
        );
      })
    ) : (
      <Center
        border="2px"
        borderColor="gray.800"
        backgroundColor="rgba(4, 1, 19, 0.9)"
        color="gray.100"
        w="100%"
        borderRadius={0}
      >
        <Text mt="2vh" mb="2vh" fontSize="2vh">
          No comments yet. Be the first one!
        </Text>
      </Center>
    )}
  </Flex>
);

export default CommentList;
