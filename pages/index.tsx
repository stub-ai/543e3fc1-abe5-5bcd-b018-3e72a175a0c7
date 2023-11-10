import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsFeed from '../components/NewsFeed';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('/api/posts');
    setPosts(response.data);
  };

  const fetchComments = async () => {
    const response = await axios.get('/api/comments');
    setComments(response.data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewsFeed posts={posts} comments={comments} />
    </main>
  );
};

export default Home;