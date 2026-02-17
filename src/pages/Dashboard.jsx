import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { Upload, History, Leaf } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
      setLoading(false);
    };

    fetchUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
        <div className="h-12 w-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 transition-colors">


      {/* Soft Background Blur Effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-pink-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rose-300 opacity-30 rounded-full blur-3xl"></div>


      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 py-16 relative z-10"
        >
          {/* Welcome Section */}
          <div className="mb-16">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-700 to-pink-500 bg-clip-text text-transparent mb-4">
              Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}!
            </h1>
            <p className="text-lg text-rose-700 dark:text-white/80">
              Manage your sustainable wardrobe beautifully.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">

            {/* Upload */}
            <Card className="p-8 bg-white/70 dark:bg-gray-800 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 mb-5">
                <Upload className="text-rose-700 dark:text-white" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-rose-700 dark:text-white mb-2">
                Upload New Item
              </h3>

              <p className="text-rose-700 dark:text-white/70 mb-6">
                Upload clothing and receive sustainable redesign suggestions.
              </p>

              <Button
                onClick={() => navigate("/upload")}
                className="bg-rose-600 hover:bg-rose-700 rounded-xl"
              >
                Start Upload
              </Button>
            </Card>

            {/* History */}
            <Card className="p-8 bg-white/70 dark:bg-gray-800 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 mb-5">
                <History className="text-rose-700 dark:text-white" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-rose-700 dark:text-white mb-2">
                Your History
              </h3>

              <p className="text-rose-700 dark:text-white/70 mb-6">
                Review your past uploads and sustainable redesigns.
              </p>

              <Button
                variant="secondary"
                onClick={() => navigate("/history")}
                className="rounded-xl"
              >
                View History
              </Button>
            </Card>

            {/* Impact */}
            <Card className="p-8 bg-white/70 dark:bg-gray-800 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 mb-5">
                <Leaf className="text-rose-600" size={22} />
              </div>

              <h3 className="text-xl font-semibold text-rose-700 dark:text-white mb-2">
                Sustainability Impact
              </h3>

              <p className="text-rose-700 dark:text-white/70 mb-6">
                Track your environmental contribution and impact.
              </p>

              <Button variant="secondary" className="rounded-xl">
                View Impact
              </Button>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="p-10 bg-white/70 dark:bg-gray-800 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl">
            <h3 className="text-xl font-semibold text-rose-700 dark:text-white mb-6">
              Recent Activity
            </h3>

            <div className="text-center py-16 text-rose-700 dark:text-white/70">
              <p className="text-lg font-medium mb-2">
                No recent activity
              </p>
              <p className="text-sm">
                Upload your first item to begin.
              </p>
            </div>
          </Card>
        </motion.div>
      </PageWrapper>
    </div>
  );
}
