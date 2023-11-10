import type { NextApiRequest, NextApiResponse } from 'next'

type Comment = {
  id: number;
  user: string;
  text: string;
};

let comments: Comment[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const newComment: Comment = req.body;
    comments.push(newComment);
    res.status(201).json({ message: 'Comment added.' });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    comments = comments.filter((comment) => comment.id !== id);
    res.status(200).json({ message: 'Comment deleted.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}