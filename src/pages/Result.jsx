import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export default function Result() {
  const [slider, setSlider] = useState(50);
  const [uploaded, setUploaded] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const comparisonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const img = sessionStorage.getItem("uploadedImage");
    if (img) setUploaded(img);
    
    // Confetti trigger
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const saveDesign = async () => {
    if (comparisonRef.current) {
      const canvas = await html2canvas(comparisonRef.current, {
        useCORS: true,
        scale: 2,
      });
      const link = document.createElement("a");
      link.download = "upcycled-design.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-cream-100 via-amber-50 to-orange-50">
        
        {/* Confetti Layer */}
        {showConfetti && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0.5],
              x: (Math.random() - 0.5) * 600, 
              y: (Math.random() - 0.5) * 600 
            }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute z-50 text-3xl pointer-events-none"
          >
            {['🌿', '✨', '♻️', '🌱', '🧵'][i % 5]}
          </motion.div>
        ))}

        <Card className="relative z-10 p-6 md:p-8 glass max-w-lg w-full flex flex-col items-center shadow-2xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-amber-900 leading-tight">Your Upcycled Look</h1>
            <p className="text-amber-800 text-sm mt-2 max-w-xs mx-auto">Compare the original and the AI redesign</p>
          </div>

          {/* FIXED SQUARE COMPARISON BOX */}
          <div 
            ref={comparisonRef}
            className="relative w-full aspect-square max-h-[60vh] rounded-2xl overflow-hidden border border-amber-200 shadow-inner bg-cream-50"
          >
            {/* Original side (Clamped to box) */}
            <div 
              className="absolute inset-0 z-10 overflow-hidden border-r-2 border-white/50" 
              style={{ width: `${slider}%` }}
            >
              <img 
                src={uploaded} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Original" 
                style={{ width: `${100 / (slider / 100)}%`, maxWidth: 'none' }} 
              />
              <span className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">ORIGINAL</span>
            </div>

            {/* AI side (Placeholder) */}
            <div className="absolute inset-0 bg-cream-50 flex items-center justify-center" />
            <span className="absolute top-3 right-3 bg-amber-600/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">AI REDESIGN</span>

            {/* Floating Slider Handle */}
            <div className="absolute top-0 bottom-0 z-20 w-1 bg-white" style={{ left: `${slider}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-4 border-amber-600 shadow-xl flex items-center justify-center cursor-pointer">
                <span className="text-amber-600 font-bold text-lg">↔</span>
              </div>
            </div>

            <input 
              type="range" min="0" max="100" value={slider} 
              onChange={(e) => setSlider(e.target.value)}
              className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
            />
          </div>

          {/* Button Alignment */}
          <div className="flex gap-4 mt-8 w-full max-w-sm">
            <button 
              onClick={() => navigate('/upload')} 
              className="flex-1 py-3 px-4 rounded-xl border-2 border-amber-600/20 text-amber-900 font-bold text-sm transition-colors hover:bg-amber-50"
            >
              Try Another
            </button>
            <button 
              onClick={saveDesign} 
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-orange-600 text-white font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              Save Design
            </button>
          </div>
        </Card>
      </div>
    </PageWrapper>
  );
}