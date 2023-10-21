import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example (add more validation rules as needed)
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length === 0) {
      // Validation passed, perform login action
      console.log("Logging in with:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-5/6 ">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-300`}
          />
          {errors.username && (
            <div className="text-red-500">{errors.username}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-300`}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
