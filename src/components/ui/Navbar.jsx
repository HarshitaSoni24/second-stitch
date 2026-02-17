// Inside Navbar.jsx
export default function Navbar({ user }) {
  return (
    <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="text-2xl font-black text-amber-950">SECOND STITCH</div>
      
      <div className="flex items-center gap-8">
        <a href="#features" className="text-amber-900 font-bold">Features</a>
        <a href="#sustainability" className="text-amber-900 font-bold">Sustainability</a>
        
        {user ? (
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#2C2621]">
              Hi, {user.user_metadata?.full_name || "Style Icon"}
            </span>
            <button 
              onClick={() => supabase.auth.signOut()}
              className="text-sm text-red-600 underline"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button className="bg-[#2C2621] text-[#FDFBF7] px-8 py-3 rounded-full font-bold">
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}