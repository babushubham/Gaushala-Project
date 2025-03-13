import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const donationMessages = [
  "🐄 Support our Goshala – Donate Now!",
  "🙏 Help us provide food and shelter for cows",
  "❤️ Every contribution makes a difference",
  "🌱 Be a part of this noble cause – Donate Today!",
];

const Marquee = () => {
  return (
    <div className="relative w-full bg-yellow-50 py-3 overflow-hidden my-2">
      <Link to="/donate" className="block">
        <motion.div
          className="flex space-x-10 text-lg font-semibold text-gray-800"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        >
          {donationMessages.map((msg, index) => (
            <span key={index} className="whitespace-nowrap">
              {msg}
            </span>
          ))}
        </motion.div>
      </Link>
    </div>
  );
};

export default Marquee;
