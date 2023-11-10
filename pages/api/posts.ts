import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  id: number;
  user: string;
  image: string;
  caption: string;
};

let posts: Post[] = [
  {
    id: 1,
    user: 'John Doe',
    image: 'https://source.unsplash.com/random',
    caption: 'This is a beautiful place!',
  },
  {
    id: 2,
    user: 'Jane Doe',
    image: 'https://source.unsplash.com/random',
    caption: 'Enjoying the sunset.',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const newPost: Post = req.body;
    posts.push(newPost);
    res.status(201).json({ message: 'Post added.' });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json({ message: 'Post deleted.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}