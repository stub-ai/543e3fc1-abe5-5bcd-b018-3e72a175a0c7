import React from 'react';

type Post = {
  id: number;
  user: string;
  image: string;
  caption: string;
};

type NewsFeedProps = {
  posts: Post[];
};

const NewsFeed: React.FC<NewsFeedProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 space-y-2">
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
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;