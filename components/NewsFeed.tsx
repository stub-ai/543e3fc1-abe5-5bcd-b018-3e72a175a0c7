import React from 'react';
import Card from './Card';

type Post = {
  id: number;
  user: string;
  image: string;
  caption: string;
  likes: number;
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Card
          key={post.id}
          user={post.user}
          image={post.image}
          caption={post.caption}
          likes={post.likes}
          comments={comments.filter((comment) => comment.id === post.id)}
        />
      ))}
    </div>
  );
};

export default NewsFeed;