import { motion } from "framer-motion";

export default function CornerLogos() {
  return (
    <>
      {/* Bottom Left */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 left-6 z-20 opacity-80"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
          className="w-10 h-10"
          alt=""
        />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 z-20 opacity-80"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892466.png"
          className="w-10 h-10"
          alt=""
        />
      </motion.div>
    </>
  );
}
