import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 mb-20 to-yellow-50 py-20 px-6 md:px-12 rounded-xl shadow-lg mx-4 md:mx-12">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Be the Reason a Cow Lives Happily 🐄❤️
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-700 leading-relaxed">
          Your kindness can provide food, shelter, and medical care to cows in need.  
          Take action today and make a lasting impact!
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <Link href="/donate">
            <button className="px-8 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-600 transition-all">
              Donate Now
            </button>
          </Link>
          <Link href="/adopt">
            <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-600 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-all">
              Adopt a Cow
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
