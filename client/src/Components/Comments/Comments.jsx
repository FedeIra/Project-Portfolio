// Import external dependencies:
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Import local dependencies:
import CommentList from "./commentList/CommentList.jsx";
import CommentForm from "./CommentForm/CommentForm.jsx";
import { getComments, postNewComment } from "../../actions";
import { validate, createComment } from "../../utils/index.js";
import useToastNotifications from "./commentToast/commentToast.jsx";
import style from "./Comments.module.css";

const Comments = () => {
  const dispatch = useDispatch();
  const { showToast } = useToastNotifications();

  const user = useSelector((state) => state.user);
  const comments = useSelector((state) => state.comments);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [allComments, setComments] = useState([]);
  const [commentArea, setCommentArea] = useState("");
  const [username, setUserName] = useState("");
  const [errorCommentArea, setErrorCommentArea] = useState(false);
  const [postAttemptComment, setPostAttemptComment] = useState(false);

  const [isShortThan960px] = useMediaQuery("(max-width: 960px)");

  const boxVariants = {
    hidden: { opacity: 0, x: window.innerWidth < 769 ? 1000 : 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  useEffect(() => {
    setComments(comments);
  }, [comments]);

  useEffect(() => {
    if (postAttemptComment && !loading.COMMENT_POST_REQUEST) {
      if (!error.COMMENT_POST_FAILURE) {
        showToast({
          title: "Comment posted.",
          description: "Thank you for your comment.",
          status: "success",
        });
      } else {
        showToast({
          title: "Error.",
          description: "There was an error posting your comment.",
          status: "error",
        });
      }
      setPostAttemptComment(false);
    }
  }, [
    loading.COMMENT_POST_REQUEST,
    error.COMMENT_POST_FAILURE,
    showToast,
    postAttemptComment,
  ]);

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
      showToast({
        title: "Loading.",
        description: "Posting comment...",
        status: "info",
        duration: 2000,
      });
      setPostAttemptComment(true);
      const newComment = createComment(user.token, username, commentArea);
      dispatch(postNewComment(newComment));
      setCommentArea("");
      setUserName("");
    }
  };

  return (
    <div id="userComments" className={style.comments_container}>
      <motion.h2
        className={`text-center ${style.comments_heading}`}
        initial={window.innerWidth < 769 ? "visible" : "hidden"}
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
        <CommentList comments={allComments} />
        <CommentForm
          username={username}
          commentArea={commentArea}
          errorCommentArea={errorCommentArea}
          handleTextAreaName={handleTextAreaName}
          handleTextAreaComment={handleTextAreaComment}
          handleSubmitComment={handleSubmitComment}
          user={user}
        />
      </Flex>
    </div>
  );
};

export default Comments;
