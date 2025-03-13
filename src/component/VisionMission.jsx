import { Link } from 'react-router-dom';


const VisionMission = () => {
  return (
    <div className="flex justify-center py-16 px-6 md:px-12 bg-yellow-50">
      <div className="bg-white max-w-5xl p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Vision & Mission</h2>
        <p className="text-lg text-gray-600 mt-2 text-center">
          Dedicated to protecting and nurturing cows while promoting sustainability.
        </p>

        {/* Columns for Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Vision Column */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-700 mt-2">
              To create a compassionate world where cows are protected, nurtured, and respected.
            </p>
          </div>

          {/* Mission Column */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              To provide shelter, food, and healthcare to cows while raising awareness about their importance.
            </p>
          </div>
        </div>

        {/* Read More Link */}
        <div className="mt-6 text-center">
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

export default VisionMission;