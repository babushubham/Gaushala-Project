import React from 'react'
import Layout from '../component/Layout/Layout'
import cow1 from "../assets/cow1.jpg"

const About = () => {
  return (
    <Layout>
     <div className=" min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Goshala</h1>
        <p className="text-lg text-gray-600">
          Welcome to our Goshala, a sanctuary dedicated to the welfare and protection of cows. 
          Our mission is to provide **compassionate care**, proper nutrition, and a safe environment 
          for our beloved cows, ensuring they lead a healthy and peaceful life.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <img 
          src={cow1} 
          alt="Goshala Image" 
          className="w-full h-72 object-fit rounded-xl shadow-md"
        />
      </div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Future Vision</h2>
        <p className="text-lg text-gray-600 mt-4">
          We believe in preserving **Indian culture** and protecting cows as a divine responsibility. 
          Our goal is to expand our facilities, create a **self-sustainable ecosystem**, and introduce **modern care methods** 
          while staying true to traditional values.
        </p>
      </div>

      {/* Why Support Us? */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Why Support Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">🐄 Cow Welfare</h3>
            <p className="text-gray-600 mt-2">We provide shelter, food, and medical care to abandoned and rescued cows.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">🌱 Sustainable Farming</h3>
            <p className="text-gray-600 mt-2">We promote organic farming and utilize cow-based products for sustainability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">❤️ Community Support</h3>
            <p className="text-gray-600 mt-2">We involve local communities, volunteers, and donors in our mission.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Join Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          Be a part of this noble cause by contributing to our **Goshala expansion and sustainability initiatives**.
        </p>
        <a 
          href="/donate" 
          className="mt-6 inline-block bg-yellow-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
        >
          Donate Now
        </a>
      </div>
    </div>
    </Layout>
  )
}

export default About