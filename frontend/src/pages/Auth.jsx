import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../AppContext";


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const {getUser} = useGlobalContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;
    
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

   try {
    let response;

    if (isLogin) {  
      response = await api.post('/user/login', { email, password });
    } else {
      response = await api.post('/user/register', { name, email, password, confirmPassword });
    }

    getUser();
    navigate("/"); 

  } catch (err) {
    const errorMsg = err.response?.data?.message || "Something went wrong.";
    setError(errorMsg);
  }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={ handleSubmit } className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {!isLogin && (
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}

          <label className="flex items-center text-sm gap-2">
            <input
              type="checkbox"
              onChange={() => setShowPassword((prev) => !prev)}
              checked={showPassword}
            />
            Show Password
          </label>

          {isLogin && (
            <div className="text-right text-sm">
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
              setError("");
              setShowPassword(false);
            }}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
