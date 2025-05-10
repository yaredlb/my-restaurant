import React, { useState, useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ showPopup, setShowPopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (showPopup) {
      setVisible(true);
    } else {
      // Delay unmount for animation
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      // Placeholder for login logic
      setShowPopup(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      <div
        className={`h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity duration-300 ${
          showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md w-[300px] transition-transform duration-300 ${
            showPopup ? "scale-100" : "scale-90"
          }`}
        >
          {/* header section  */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-dark">Login</h1>
            </div>
            <div>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setShowPopup(false)}
              />
            </div>
          </div>

          {/* Login form section  */}
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-md border px-2 py-1 mb-1 ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-md border px-2 py-1 mb-1 ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">{errors.password}</p>
            )}

            {/* Login button section  */}
            <div>
              <button
                className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>

            {/* additional links */}
            <div className="flex justify-between mt-3 text-sm">
              <button
                className="text-primary hover:underline"
                onClick={() => alert("Registration flow not implemented")}
              >
                Register
              </button>
              <button
                className="text-primary hover:underline"
                onClick={() => alert("Password reset flow not implemented")}
              >
                Forgot Password?
              </button>
            </div>

            {/* social login  */}
            <div className="mt-4">
              <p className="text-center">or login with</p>
              <div className="flex justify-center gap-4 mt-2">
                <button
                  aria-label="Login with Facebook"
                  className="text-3xl text-blue-600 hover:text-blue-800 duration-200"
                  onClick={() => alert("Facebook login not implemented")}
                >
                  <FaFacebook />
                </button>
                <button
                  aria-label="Login with Google"
                  className="text-3xl text-red-600 hover:text-red-800 duration-200"
                  onClick={() => alert("Google login not implemented")}
                >
                  <FaGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
