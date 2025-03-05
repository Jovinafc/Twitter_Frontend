import React, { useState } from 'react'
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

interface LoginData {
    email: string,
    password: string
}

const LoginPage: React.FC = () => {

    const [formData, setFormData] = useState<LoginData>({ email: '', password: ''})
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(formData.email, formData.password)
            console.log('Logged in successfully:', response);
            if(response.status === "success"){
                localStorage.setItem('token', response.token)
                navigate('/');
            }else{
                setError(response.message);
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    }

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          {error && <div className="text-red-500 text-center mt-2">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4 mt-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md mt-1"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
            >
              Login
            </button>
          </form>
        </div>
      );
}

export default LoginPage