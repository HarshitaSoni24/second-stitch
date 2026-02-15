import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-cream-100 via-amber-50 to-orange-50">
        {/* ANIMATED BACKGROUND ELEMENTS - Fashion-related animations */}
        
        {/* Animated dress silhouette 1 - rotating */}
        <motion.svg
          className="absolute top-20 left-10 w-32 h-40 opacity-20"
          viewBox="0 0 100 140"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 30 20 Q 30 10, 40 10 Q 50 10, 50 15 L 50 40 Q 50 50, 40 55 L 35 85 Q 35 95, 40 100 L 30 140 L 20 140 L 25 100 Q 25 95, 30 85 L 25 55 Q 15 50, 15 40 L 15 15 Q 15 10, 25 10 Q 35 10, 35 20 Z"
            stroke="#c9a876"
            strokeWidth="1.5"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>

        {/* Animated dress silhouette 2 - floating */}
        <motion.svg
          className="absolute bottom-32 right-16 w-28 h-36 opacity-25"
          viewBox="0 0 100 140"
        >
          <motion.path
            d="M 25 20 Q 25 10, 50 10 Q 75 10, 75 20 L 75 50 Q 75 60, 60 70 L 55 100 Q 55 115, 50 130 L 45 130 Q 40 115, 40 100 L 35 70 Q 20 60, 20 50 Z"
            stroke="#d4a574"
            strokeWidth="2"
            fill="none"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Flowing fabric wave animation */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 400 Q 250 350 500 400 T 1000 400"
            stroke="#c9a876"
            strokeWidth="2"
            fill="none"
            animate={{ 
              d: [
                "M 0 400 Q 250 350 500 400 T 1000 400",
                "M 0 400 Q 250 450 500 400 T 1000 400",
                "M 0 400 Q 250 350 500 400 T 1000 400"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Floating fashion accessory dots */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full opacity-15 bg-amber-400"
        />

        {/* CENTER LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 w-full max-w-md"
        >
          {/* Glass card */}
          <Card className="p-8">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl font-bold text-amber-900">SECOND STITCH</h1>
            </motion.div>

            <h2 className="text-3xl font-bold text-center text-amber-900 mb-2">Welcome back</h2>
            <p className="text-sm text-amber-800 text-center mb-8">AI Powered Sustainable Wardrobe</p>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <label className="text-sm font-semibold text-amber-900 mb-2 block">Email</label>
              <Input placeholder="your@email.com" type="email" />
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <label className="text-sm font-semibold text-amber-900 mb-2 block">Password</label>
              <div className="relative">
                <Input placeholder="Enter your password" type={showPassword ? "text" : "password"} />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-amber-700/70 hover:text-amber-900 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </motion.div>

            {/* Login Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn w-full"
            >
              Log in
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-amber-300/40"></div>
              <span className="text-xs text-amber-700/60">or</span>
              <div className="flex-1 h-px bg-amber-300/40"></div>
            </div>

            {/* Sign up link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm text-amber-900">
                Don't have an account?{" "}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate("/register")}
                  className="font-semibold text-orange-700 cursor-pointer hover:text-orange-900 transition"
                >
                  Sign up
                </motion.span>
              </p>
            </motion.div>

            {/* Footer text */}
            <p className="text-xs text-amber-700/50 text-center mt-6">
              By logging in, you agree to our Terms & Privacy Policy
            </p>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
