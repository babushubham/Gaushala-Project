import { Link } from 'react-router-dom';
import cow1 from "../assets/cow1.jpg"
import cow2 from "../assets/cow3.jpg"
import cow3 from "../assets/cow_grp2.jpg"
import cow4 from "../assets/cow_grp1.jpg"

const adoptList = [
  { id: 1, name: "Ganga", age: "2 years", amount: "₹3000/month", img: cow1 },
  { id: 2, name: "Shyam", age: "3 years", amount: "₹2500/month", img: cow2 },
  { id: 3, name: "Radha", age: "1.5 years", amount: "₹2800/month", img: cow4 },
];

const AdoptCow = () => {
  return (
    <div className="pb-16 px-6 md:px-12 bg-yellow-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center p-8">
        Adopt a Cow & Give Them a Loving Home
      </h2>

      {/* Adoption Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {adoptList.map((cow) => (
          <div key={cow.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={cow.img} alt={cow.name} className="w-full h-48 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{cow.name}</h3>
              <p className="text-gray-600">Age: {cow.age}</p>
              <p className="text-yellow-600 font-bold text-lg">{cow.amount}</p>
              <Link href="/adopt">
                <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                  Adopt Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptCow;
