import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: 'Fast & Reliable',
    description: 'Shorten your URLs instantly with our blazing fast service.',
    color: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  },
  {
    title: 'Custom Aliases',
    description: 'Create memorable custom links that suit your brand.',
    color: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
  },
  {
    title: 'Detailed Analytics',
    description: 'Track clicks and engagement with comprehensive stats.',
    color: 'bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500',
  },
]

const LandingPage = () => {
  const navigate = useNavigate();
  const dashBoardNavigateHandler = () => {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 py-20"
      >
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400">
            Sword URL Shortener
          </h1>
          <p className="text-lg text-gray-300">
            Cut through the clutter with Sword, the ultra-fast, customizable URL shortener that gives you powerful analytics and seamless sharing.
          </p>
          <div className="flex space-x-4">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg font-semibold text-black shadow-lg"
              whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(255, 193, 7, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={dashBoardNavigateHandler}
            >
              Create Short Link
            </motion.button>
            <motion.button
              className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
              whileHover={{ scale: 1.07, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={dashBoardNavigateHandler}
            >
              Manage Links
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <img
            src="https://wallpapers.com/images/featured/demon-slayer-tanjiro-rjjv7bxgdfl9qwy3.jpg?auto=format&fit=crop&w=800&q=80"
            alt="URL Shortening and Analytics Illustration"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
          Features that Empower Your Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, description, color }, idx) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", stiffness: 75 }}
              className={`${color} p-8 rounded-xl shadow-lg cursor-pointer text-white`}
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-100">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LandingPage