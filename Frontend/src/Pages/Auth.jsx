import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "../Shared/Spinner";
import { useAuth } from "../Hooks/useAuth";

function Auth() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: {
      street: "",
      city: "",
      pincode: "",
    },
  });

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const auth = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["street", "city", "pincode"].includes(name)) {
      setUserInfo((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setUserInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    console.log(userInfo);
    auth(userInfo, setUserInfo, setLoader, isSignup, setIsSignup);
  };

  return (
    <section className="h-[91vh] bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-10 space-y-6 border border-orange-200">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-500">
            {isSignup ? "Join Foodie World 🍕" : "Welcome Back, Foodie 😋"}
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            {isSignup ? "Sign up to get started" : "Login to continue"}
          </p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          {isSignup && (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          )}
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Password Field with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-4 text-xl text-orange-500 cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          {isSignup && (
            <>
              {/* Confirm Password Field with Toggle */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={userInfo.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-3 right-4 text-xl text-orange-500 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="street"
                  value={userInfo.address.street}
                  onChange={handleChange}
                  placeholder="Street"
                  className="px-4 py-3 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  name="city"
                  value={userInfo.address.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="px-4 py-3 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  name="pincode"
                  value={userInfo.address.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  className="px-4 py-3 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:col-span-2"
                />
              </div>
            </>
          )}

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md cursor-pointer"
          >
            {loader && <Spinner />} {isSignup ? "Sign Up" : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600">
            {isSignup ? "Already have an account?" : "New here?"}{" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-orange-500 hover:underline font-medium cursor-pointer"
            >
              {isSignup ? "Login now" : "Sign up now"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Auth;
