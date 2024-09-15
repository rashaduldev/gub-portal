/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic here (you can replace this with Firebase logic later)
    if (loginId === '') {
      setLoginError(true);
    } else {
      setLoginError(false);
    }

    if (password === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Placeholder for logo */}
        </div>
        <h1 className="ml-4 text-2xl font-bold text-green-600">
          <span className="italic">Green</span> University of Bangladesh
        </h1>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md border border-green-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Login Id.."
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${loginError ? 'border-red-500' : 'border-gray-300'}`}
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
            {loginError && (
              <p className="text-red-500 text-sm mt-1 absolute -bottom-5">
                The Login Id field is required.
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password.."
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1 absolute -bottom-5">
                The Password field is required.
              </p>
            )}
          </div>
          <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition duration-300">
           <Link to={'/portal'}>
           LOG IN
           </Link>
          </button>
        </form>
       <div className='mt-5 flex items-center gap-2'>
       Don't Have an account ?
       <a className='text-blue-600 underline' href="/signup">Signup here</a>
       </div>
      </div>

      {/* Footer */}
      <footer className="mt-12">
        <p className="text-gray-600">&copy; 2024 - Edusoft Consultants Ltd.</p>
      </footer>
    </div>
  );
};

export default Login;
