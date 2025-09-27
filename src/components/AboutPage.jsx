import React from 'react'
import { FaLink, FaCode, FaRocket } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center">
        <FaLink className="text-blue-600 mr-3" /> About Sword
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Sword is a powerful and easy-to-use URL shortener that helps you create clean, shareable links in seconds. Whether you want to track clicks, manage your links, or simply shorten long URLs, Sword has you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <FaRocket className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Fast & Reliable</h2>
          <p className="text-gray-600">
            Our service ensures your links are shortened instantly and always available to your users.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaCode className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Developer Friendly</h2>
          <p className="text-gray-600">
            Easily integrate Sword into your projects with our simple and powerful API.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaLink className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Link Management</h2>
          <p className="text-gray-600">
            Track your link performance and manage all your URLs in one convenient dashboard.
          </p>
        </div>
      </div>
      <p className="mt-8 text-gray-700">
        Sword is built to help you share links smarter and easier. Join thousands of users who trust Sword for their URL shortening needs.
      </p>
    </div>
  )
}

export default AboutPage