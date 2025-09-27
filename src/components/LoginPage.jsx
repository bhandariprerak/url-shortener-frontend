import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../api/api'; // Adjust path if your api instance is elsewhere
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setToken } = useStoreContext();

    const [usernameFocused, setUsernameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const loginHandler = async (data) => {
        setLoading(true);
        try {
            const { data: response } = await api.post('/api/auth/public/login', data);
            // Update context here
            setToken(response.token);
            // Store the token in localStorage
            localStorage.setItem('JWT_TOKEN', JSON.stringify(response.token));
            
            toast.success('Login successful!');
            reset();
            navigate('/');
        } catch (err) {
            let message = err?.response?.data?.message || 'Login failed. Please try again.';
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your Account</h2>
                <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
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
                            <span className="text-gray-500 text-sm">
                                Username must be 3-24 characters long.
                            </span>
                        )}
                        {errors.username && (
                            <span className="text-red-500 text-sm">{errors.username.message}</span>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
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
                            <span className="text-gray-500 text-sm">
                                Password must be at least 6 characters long.
                            </span>
                        )}
                        {errors.password && (
                            <span className="text-red-500 text-sm">{errors.password.message}</span>
                        )}
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 disabled:opacity-60"
                            disabled={loading || isSubmitting}
                        >
                            {loading || isSubmitting ? 'Logging In...' : 'Log In'}
                        </button>
                    </div>
                </form>
                <div className="mt-5 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline font-medium">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;