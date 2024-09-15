import { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation logic (you can replace this with Firebase logic later)
    if (name === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (confirmPassword === '' || confirmPassword !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
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

      {/* Signup Form */}
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md border border-green-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Full Name.."
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${nameError ? 'border-red-500' : 'border-gray-300'}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-1 absolute -bottom-5">
                The Name field is required.
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email.."
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 absolute -bottom-5">
                The Email field is required.
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
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password.."
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1 absolute -bottom-5">
                Passwords do not match.
              </p>
            )}
          </div>
          <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600 transition duration-300">
            SIGN UP
          </button>
        </form>
        <div className='mt-5 flex items-center gap-2'>
            Already have an account ?  <a className='text-blue-600 underline' href="/">Login</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12">
        <p className="text-gray-600">&copy; 2024 - Edusoft Consultants Ltd.</p>
      </footer>
    </div>
  );
};

export default Signup;
