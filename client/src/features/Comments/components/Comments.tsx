import { useState, useEffect, type FC, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCommentsAsync, postCommentAsync } from '../state/commentsSlice';
import { createComment, validateMinLength } from '../../../utils/comments';
import { showToast } from '../../../utils/toast';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { comments, postLoading, postError } = useAppSelector((state) => state.comments);

  const [commentArea, setCommentArea] = useState('');
  const [username, setUsername] = useState('');
  const [errorCommentArea, setErrorCommentArea] = useState(false);
  const [postAttempt, setPostAttempt] = useState(false);

  const isMobile = window.innerWidth < 769;
  const isNarrow = window.innerWidth < 960;

  const boxVariants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
    : { hidden: { opacity: 0, x: 1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  useEffect(() => {
    void dispatch(getCommentsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (postAttempt && !postLoading) {
      if (!postError) {
        showToast({ title: 'Comment posted.', description: 'Thank you for your comment.', status: 'success' });
      } else {
        showToast({ title: 'Error.', description: 'There was an error posting your comment.', status: 'error' });
      }
      setPostAttempt(false);
    }
  }, [postLoading, postError, postAttempt]);

  const handleTextAreaComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentArea(e.target.value);
    setErrorCommentArea(validateMinLength(e.target.value));
  };

  const handleTextAreaName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmitComment = (e: FormEvent) => {
    e.preventDefault();
    if (!commentArea) {
      setErrorCommentArea(true);
      return;
    }
    showToast({ title: 'Loading.', description: 'Posting comment...', status: 'loading', duration: 2000 });
    setPostAttempt(true);
    const newComment = createComment(username, commentArea);
    void dispatch(postCommentAsync({ commentData: newComment, token: user.token! }));
    setCommentArea('');
    setUsername('');
  };

  return (
    <div id="userComments" className="w-full">
      <motion.h2
        className="section-heading"
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Post your comment!
      </motion.h2>

      <div
        className="flex flex-col mt-20 mb-12"
        style={{
          marginLeft: isNarrow ? '6vw' : '25vw',
          width: isNarrow ? '85%' : '50%',
        }}
      >
        <CommentList comments={comments} />
        <CommentForm
          username={username}
          commentArea={commentArea}
          errorCommentArea={errorCommentArea}
          handleTextAreaName={handleTextAreaName}
          handleTextAreaComment={handleTextAreaComment}
          handleSubmitComment={handleSubmitComment}
          hasToken={!!user?.token}
        />
      </div>
    </div>
  );
};

export default Comments;
