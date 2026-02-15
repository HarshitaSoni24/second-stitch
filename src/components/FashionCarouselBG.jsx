import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1567450489212-d37b5ba1b639?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1539008588-a694612cf822?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1595777707802-41d339d29c19?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1551568590-957150444588?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1515121375890-fd40a32fc0f0?w=400&h=280&fit=crop",
];

export default function FashionCarouselBG() {
  return (
    <div className="fixed top-32 left-0 right-0 h-56 z-20 border-b-4 border-amber-700/20 bg-gradient-to-r from-cream-100 via-amber-50 to-orange-50 backdrop-blur-sm overflow-hidden shadow-md">
      <motion.div
        className="flex h-full gap-4 px-4 py-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="min-w-max flex-shrink-0">
            <img
              src={src}
              className="h-full w-72 object-cover rounded-xl shadow-lg border-2 border-amber-200/60 hover:shadow-xl transition-shadow"
              alt="Fashion carousel"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
