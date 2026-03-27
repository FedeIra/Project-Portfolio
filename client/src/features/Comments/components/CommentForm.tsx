import type { FC, ChangeEvent, FormEvent } from 'react';

interface CommentFormProps {
  username: string;
  commentArea: string;
  errorCommentArea: boolean;
  handleTextAreaName: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleTextAreaComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmitComment: (e: FormEvent) => void;
  hasToken: boolean;
}

const CommentForm: FC<CommentFormProps> = ({
  username,
  commentArea,
  errorCommentArea,
  handleTextAreaName,
  handleTextAreaComment,
  handleSubmitComment,
  hasToken,
}) => (
  <div className="border-2 border-gray-800 bg-primary-dark text-gray-100">
    <p className="text-[2.5vh] ml-[5vh] mt-5">Leave your comment!</p>
    <hr className="border-gray-700 my-4" />

    <div className="flex flex-col items-center mb-5 mt-5 w-full px-[5%]">
      <textarea
        value={username}
        placeholder="Name or Company..."
        onChange={handleTextAreaName}
        className="w-full bg-transparent border-2 border-gray-300 text-white p-3 mb-5 outline-none resize-none placeholder-gray-400"
        rows={1}
      />
      <textarea
        value={commentArea}
        placeholder="Type your comment here..."
        onChange={handleTextAreaComment}
        className="w-full bg-transparent border-2 border-gray-300 text-white p-3 mb-5 outline-none resize-none placeholder-gray-400"
        rows={3}
      />
    </div>

    <div className="flex justify-end items-center px-[5%] pb-5 gap-4">
      {errorCommentArea && (
        <p className="text-red-500">You must write at least 5 characters.</p>
      )}
      {!hasToken ? (
        <button className="bg-gray-400 text-black px-6 py-2 cursor-not-allowed">
          Login to Comment
        </button>
      ) : (
        <button
          onClick={handleSubmitComment}
          disabled={errorCommentArea}
          className="bg-gray-200 text-black px-6 py-2 hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      )}
    </div>
  </div>
);

export default CommentForm;
