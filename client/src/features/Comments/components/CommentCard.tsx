import type { FC } from 'react';

interface CommentCardProps {
  username: string;
  text: string;
  date: string;
}

const CommentCard: FC<CommentCardProps> = ({ username, text, date }) => (
  <div className="border border-gray-800 bg-black text-gray-200 w-full">
    <div className="flex items-center ml-7 mt-5">
      <img
        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        alt="avatar"
        className="w-10 h-10 rounded-full"
      />
      <span className="ml-4 font-['Nunito'] text-[28px]">@{username}</span>
    </div>
    <hr className="border-gray-700 mt-5" />
    <div className="flex flex-col justify-between min-h-[80px] m-5">
      <p>"{text}"</p>
      <p className="text-gray-500">{date}</p>
    </div>
  </div>
);

export default CommentCard;
