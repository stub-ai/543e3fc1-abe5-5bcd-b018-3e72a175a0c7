import React from 'react';

type CardProps = {
  user: string;
  image: string;
  caption: string;
  comments: { user: string; text: string }[];
  likes: number;
};

const Card: React.FC<CardProps> = ({ user, image, caption, comments, likes }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      <img className="w-full h-64 object-cover" src={image} alt={caption} />
      <div className="p-4">
        <h2 className="font-bold">{user}</h2>
        <p>{caption}</p>
        <div className="mt-4">
          <span className="text-sm text-gray-600">{likes} likes</span>
        </div>
        <div className="mt-4 space-y-2">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="font-bold text-sm">{comment.user}</span>
              <span className="text-sm">{comment.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;