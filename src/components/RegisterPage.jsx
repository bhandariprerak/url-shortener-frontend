import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../api/api'; // Adjust path if your api instance is elsewhere

const RegisterPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const registerHandler = async (data) => {
    setLoading(true);
    try {
      await api.post('/api/auth/public/register', data);
      toast.success('Registration successful! Please login.');
      reset();
      navigate('/login');
    } catch (err) {
      let message = err?.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>
        <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-inter ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              {...register('username', {
                required: 'Username is required',
                minLength: { value: 3, message: 'Username must be at least 3 characters' },
                maxLength: { value: 24, message: 'Username must be at most 24 characters' },
              })}
              autoComplete="username"
              disabled={loading}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
            />
            {usernameFocused && !errors.username && (
              <span className="text-gray-200 text-sm">
                Username must be 3-24 characters long.
              </span>
            )}
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-inter ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              autoComplete="email"
              disabled={loading}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            {emailFocused && !errors.email && (
              <span className="text-gray-200 text-sm">
                Enter a valid email address (e.g. user@example.com).
              </span>
            )}
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-200 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-inter ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              })}
              autoComplete="new-password"
              disabled={loading}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            {passwordFocused && !errors.password && (
              <span className="text-gray-200 text-sm">
                Password must be at least 6 characters long.
              </span>
            )}
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>
          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg font-semibold text-black shadow-lg disabled:opacity-60"
              whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(255, 193, 7, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? 'Registering...' : 'Register'}
            </motion.button>
          </div>
        </form>
        <div className="mt-5 text-center text-gray-200">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;