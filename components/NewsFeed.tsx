import React from 'react';

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
  comments: Comment[];
};

const NewsFeed: React.FC<NewsFeedProps> = ({ posts, comments }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.user}</h2>
          <img src={post.image} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.user}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;