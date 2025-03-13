import React from 'react'
import Layout from '../component/Layout/Layout'


const donations = [
  { id: 1, title: "Cow Feed for a Day", amount: 500, image: "/feed.jpg", description: "Provide nutritious food for our cows for an entire day." },
  { id: 2, title: "Medical Care", amount: 1000, image: "/medical.jpg", description: "Support medical care and treatments for sick or injured cows." },
  { id: 3, title: "Shelter Maintenance", amount: 1500, image: "/shelter.jpg", description: "Help maintain and improve the shelter for the cows." },
  { id: 4, title: "Adopt a Cow (Monthly)", amount: 3000, image: "/adopt.jpg", description: "Sponsor a cow’s food and care for a month." },
];

const Donate = () => {
  return (
    <Layout>
     
    <div className="bg-yellow-50 min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Our Goshala</h1>
        <p className="text-lg text-gray-600">
          Choose a donation category and contribute towards the well-being of our cows.
        </p>
      </div>

      {/* Donation Cards */}
      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation.id} className="bg-white p-6 rounded-xl shadow-md text-center">
            <img src={donation.image} alt={donation.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-700 mt-4">{donation.title}</h3>
            <p className="text-gray-600 mt-2">{donation.description}</p>
            <p className="text-lg font-bold text-yellow-700 mt-2">₹{donation.amount}</p>
            <button 
              className="mt-4 bg-yellow-600 text-white px-5 py-2 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
              onClick={() => handleDonate(donation.amount)}
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}
const handleDonate = (amount) => {
  alert(`Redirecting to payment for ₹${amount} donation.`);
};

export default Donate