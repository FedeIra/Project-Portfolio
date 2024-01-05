// Import external dependencies:
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Flex,
  Text,
  Button,
  Center,
  Textarea,
  Divider,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// Import local dependencies:
import { getComments, postNewComment } from "../../actions";
import CommentCard from "./CommentCard/CommentCard.jsx";
import style from "./Comments.module.css";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  const toast = useToast();

  const { loading, email, error } = useSelector((state) => state);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error.",
        description: "Error posting comment. Please try again.",
        status: "error",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    } else if (email) {
      toast({
        title: "Comment posted.",
        description: "I appreciate your comment.",
        status: "success",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    } else if (loading) {
      toast({
        title: "Loading.",
        description: "Posting comment...",
        status: "info",
        duration: 3000,
        position: "top-right",
        isClosable: true,
      });
    }
  }, [loading, email, error, toast]);

  const [commentsLocal, setCommentsLocal] = useState([]);
  const [commentArea, setCommentArea] = useState("");
  const [userName, setUserName] = useState("");
  const [errorCommentArea, setErrorCommentArea] = useState(false);
  const [isShortThan960px] = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  useEffect(() => {
    setCommentsLocal(comments);
  }, [comments]);

  const validate = (str) => {
    if (str.length < 5) {
      return true;
    } else return false;
  };

  const handleTextAreaComment = (e) => {
    e.preventDefault();
    setCommentArea(e.target.value);
    setErrorCommentArea(validate(e.target.value));
  };

  const handleTextAreaName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentArea) {
      setErrorCommentArea(true);
    } else {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;
      let commentId = Math.random();
      dispatch(postNewComment(commentId, userName, commentArea, currentDate));
      setCommentsLocal([
        ...commentsLocal,
        { _id: commentId, userName, content: commentArea, date: currentDate },
      ]);
      setCommentArea("");
      setUserName("");
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, x: window.innerWidth < 768 ? -1000 : 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div id="userComments" className={style.comments_container}>
      <motion.h2
        className={`text-center ${style.comments_heading}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Post your comment!
      </motion.h2>
      <Flex
        flexDirection="column"
        ml={isShortThan960px ? "6vw" : "25vw"}
        mt={85}
        mb={50}
        w={isShortThan960px ? "85%" : "50%"}
      >
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
          {commentsLocal.length ? (
            commentsLocal.map((comment) => {
              return (
                <CommentCard
                  key={comment._id}
                  username={comment.userName}
                  text={comment.content}
                  date={comment.date}
                  id={comment._id}
                  deleteLocal={setCommentsLocal}
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
          <Center
            flexDirection="column"
            alignItems="center"
            mb={5}
            mt={5}
            w="100%"
          >
            <Textarea
              value={userName}
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
            <Button
              mr="5%"
              mb={5}
              backgroundColor="gray.800"
              borderRadius={0}
              _hover={{ backgroundColor: "gray.600" }}
              onClick={handleSubmitComment}
              disabled={errorCommentArea}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Comments;
