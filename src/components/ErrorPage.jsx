import { TbSwordOff } from 'react-icons/tb'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TbSwordOff className="text-6xl text-pink-500 mb-4" />
      <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
        Looks like Sword has cut through this page.
      </h1>
      <p className="text-gray-200 text-lg mb-6 text-center">
        {message ? message : "I didn't see this coming! If you've found a way to break my Sword, let me know so I can forge a stronger Sword next."}
      </p>
      <motion.button
        onClick={() => {
          navigate("/");
        }}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg font-semibold text-black shadow-lg"
        whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(255, 193, 7, 0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        Go back to home
      </motion.button>
    </motion.div>
  )
}

export default ErrorPage