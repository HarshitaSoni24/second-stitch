import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import Processing from "./pages/Processing";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import AnimatedBackground from "./components/AnimatedBackground";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* ALL pages share Navbar */}
          <Route element={<AppLayout />}>

            {/* Public */}
            <Route path="/" element={<Landing />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Protected */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

<Route path="/upload" element={<Upload />} />


            <Route
              path="/result"
              element={
                <ProtectedRoute>
                  <Result />
                </ProtectedRoute>
              }
            />

            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />

          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
