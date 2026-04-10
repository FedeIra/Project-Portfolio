import type { FC } from 'react';
import type { Comment } from '../../../utils/types';
import CommentCard from './CommentCard';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: FC<CommentListProps> = ({ comments }) => (
  <div className="max-h-[500px] overflow-auto flex flex-col items-center custom-scrollbar">
    {comments && comments.length > 0 ? (
      comments.map((comment) => (
        <CommentCard
          key={comment._id}
          username={comment.username}
          text={comment.content}
          date={comment.date}
        />
      ))
    ) : (
      <div className="border-2 border-gray-800 bg-primary-dark text-gray-100 w-full flex items-center justify-center py-4">
        <p className="text-base">No comments yet. Be the first one!</p>
      </div>
    )}
  </div>
);

export default CommentList;
