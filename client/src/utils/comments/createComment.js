const createDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const commentDate = `${day}-${month}-${year}`;
  return commentDate;
};

export const createComment = (token, username, content) => {
  const newComment = {
    date: createDate(),
    commentId: Math.random(),
    token,
    username,
    content,
  };
  return newComment;
};
