import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Navbar from "../components/Navbar"; // Use your existing Navbar
// Import all other components used in Landing.jsx (Hero, Marquee, etc.)

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) setUser(user);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return null; // Prevents the "white flash" by rendering nothing until data is ready

  return (
    <div className="bg-[#FDFBF7]">
      {/* Pass the user prop to your Navbar to show the name */}
      <Navbar user={user} /> 
      
      {/* Copy-paste all the sections from your Landing.jsx here:
         <Hero />
         <Marquee />
         <CircularJourney />
         <Footer />
      */}
    </div>
  );
}