import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold m-4">Sultans Home</h1>

      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://www.clerk.com"
          className="text-xl text-blue-700 font-bold"
        >
          clerk.com
        </Link>
        <p>
          This is a demo of Clerk authentication. Clerk is more than a "sign-in
          box." Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>

      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://api.github.com"
          className="text-xl text-blue-700 font-bold"
        >
          api.github.com
        </Link>
        <p>Explore github repositories using Fetch API</p>
      </div>

      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="http://localhost:3000/api/courses"
          className="text-xl text-blue-700 font-bold"
        >
          Backend API 활용
        </Link>
        <p>
          Provide Backend API service that provide extensive courses information
          in web development
        </p>
      </div>

      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://github.com/lbcsultan/clerk2"
          className="text-xl text-blue-700 font-bold"
        >
          Github repository
        </Link>
      </div>

      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://clerk2-two.vercel.app/"
          className="text-xl text-blue-700 font-bold"
        >
          Web service at vercel.com
        </Link>
      </div>
    </>
  )
}
