import React, { useState, FormEvent, ChangeEvent } from 'react';

type Post = {
  id: number;
  user: string;
  image: string;
  caption: string;
};

type Comment = {
  id: number;
  user: string;
  text: string;
};

type NewsFeedProps = {
  posts: Post[];
};

const NewsFeed: React.FC<NewsFeedProps> = ({ posts }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>('');

  const handleAddComment = (comment: Comment) => {
    setComments([...comments, comment]);
    setCommentText('');
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddComment({
      id: comments.length + 1,
      user: 'Current User',
      text: commentText
    });
  };

  return (
    <div className="space-y-6 bg-white">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 space-y-2 bg-white">
          <div className="flex items-center space-x-2">
            <img
              src="https://source.unsplash.com/random"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-bold">{post.user}</span>
          </div>
          <img src={post.image} alt="Post" className="w-full h-64 object-cover" />
          <p>{post.caption}</p>
          <div className="space-y-2">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-center space-x-2">
                <span className="font-bold">{comment.user}</span>
                <p>{comment.text}</p>
              </div>
            ))}
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentChange}
              />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;