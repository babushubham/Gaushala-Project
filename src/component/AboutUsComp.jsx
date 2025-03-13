
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AboutUsComp = () => {
  return (
     <div className="flex justify-center py-16 px-6 md:px-12 bg-yellow-50 ">
      <div className="bg-white max-w-4xl p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Our Goshala</h2>
        <p className="text-lg text-gray-600 mt-2">
          We are dedicated to providing care, shelter, and protection for cows with compassion.
        </p>

        {/* Key Points */}
        <ul className="mt-6 space-y-3 text-left text-gray-700">
          <li>✔ Providing a safe home for rescued and abandoned cows.</li>
          <li>✔ Ensuring proper nutrition and healthcare support.</li>
          <li>✔ Promoting ethical dairy practices and sustainability.</li>
          <li>✔ Encouraging community involvement in cow welfare.</li>
        </ul>

        {/* Read More Link */}
        <div className="mt-6">
          <Link to="/about">
            <span className="text-yellow-600 font-semibold hover:underline text-lg">
              Read More →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;
