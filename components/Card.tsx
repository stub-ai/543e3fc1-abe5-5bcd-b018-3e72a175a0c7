import React, { useState } from 'react';
import axios from 'axios';

type CardProps = {
  user: string;
  image: string;
  caption: string;
  comments: { id: number, user: string; text: string }[];
  likes: number;
};

const Card: React.FC<CardProps> = ({ user, image, caption, comments, likes }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = async () => {
    const response = await axios.post('/api/comments', { user: 'Anonymous', text: newComment });
    if (response.status === 201) {
      comments.push({ id: comments.length + 1, user: 'Anonymous', text: newComment });
      setNewComment('');
    }
  };

  const handleDeleteComment = async (id: number) => {
    const response = await axios.delete('/api/comments', { data: { id } });
    if (response.status === 200) {
      const index = comments.findIndex((comment) => comment.id === id);
      comments.splice(index, 1);
    }
  };

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
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2">
              <span className="font-bold text-sm">{comment.user}</span>
              <span className="text-sm">{comment.text}</span>
              <button onClick={() => handleDeleteComment(comment.id)} className="text-red-500 text-sm">Delete</button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Add a comment..."
          />
          <button onClick={handleAddComment} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;