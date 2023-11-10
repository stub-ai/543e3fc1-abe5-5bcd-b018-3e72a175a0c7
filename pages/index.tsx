import Image from 'next/image'
import { Inter } from 'next/font/google'
import NewsFeed from '../components/NewsFeed'

const inter = Inter({ subsets: ['latin'] })

const posts = [
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
  // Add more posts as needed
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <NewsFeed posts={posts} />
    </main>
  )
}