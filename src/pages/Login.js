import {useState} from 'react';
import { Link } from 'react-router-dom';
const Login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };




  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
          <div className='flex items-center justify-center '>
            <p className="text-sm mx-3">Don't have an account?</p>
            <Link
              to="/signup"
              className="text-blue-500 font-bold hover:text-blue-800 focus:outline-none focus:underline"
            >
              Sign Up
            </Link>
          </div>
        
      </form>
    </div>
  );
}

export default Login;
