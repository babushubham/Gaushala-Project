import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const donationMessages = [
    "🐄 Goshala Visit & Volunteering Facility Available",
    "🙏 🌿 Experience the Divine Connection",
    "❤️ Every contribution makes a difference",
    "🙏 Serve & Visit the Goshala",
  ];

function VisitMarquee() {
//   return (
//     <div className="bg-[#FFF3CD] py-3 overflow-hidden relative">
//         <Link to="/visitform">
//       <div className="whitespace-nowrap flex items-center">
//         <div className="animate-marquee text-lg font-semibold text-[#D97706] flex gap-6">
//           <span>🐄 Goshala Visit & Volunteering Facility Available</span>
//           <span>🌿 Experience the Divine Connection</span>
//           <span>🙏 Serve & Visit the Goshala</span>
//         </div>
//       </div>
//       <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
          
//       </div>
//         </Link>
      
//       <style>
//         {`
//           @keyframes marquee {
//             from { transform: translateX(100%); }
//             to { transform: translateX(-100%); }
//           }
//           .animate-marquee {
//             display: inline-block;
//             white-space: nowrap;
//             animation: marquee 10s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );

return (
    <div className="relative w-full bg-yellow-50 py-3 overflow-hidden mt-5">
      <Link to="/visitform" className="block">
        <motion.div
          className="flex space-x-10 text-lg font-semibold text-gray-800"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 17, ease: "linear" }}
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
}

export default VisitMarquee;
