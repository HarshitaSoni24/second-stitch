import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // ✅ Added state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Moved inside component
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Error signing in:", error.message);
    } else {
      navigate("/dashboard");
    }
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) console.log("Error signing up:", error.message);
    else console.log("User registered:", data.user);
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-cream-100 via-amber-50 to-orange-50">
        
        {/* All your background animations remain SAME */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 w-full max-w-md"
        >
          <Card className="p-8">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <h1 className="text-5xl font-bold text-amber-900">
                SECOND STITCH
              </h1>
            </motion.div>

            <h2 className="text-3xl font-bold text-center text-amber-900 mb-2">
              Welcome back
            </h2>
            <p className="text-sm text-amber-800 text-center mb-8">
              AI Powered Sustainable Wardrobe
            </p>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <label className="text-sm font-semibold text-amber-900 mb-2 block">
                Email
              </label>
              <Input
                placeholder="your@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <label className="text-sm font-semibold text-amber-900 mb-2 block">
                Password
              </label>
              <div className="relative">
                <Input
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
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
              onClick={handleSignIn}   // ✅ Connected
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

            <p className="text-xs text-amber-700/50 text-center mt-6">
              By logging in, you agree to our Terms & Privacy Policy
            </p>

          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
