import React from 'react'
import Layout from '../component/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions or want to support our Goshala? Feel free to reach out to us!
        </p>
      </div>

      {/* Contact Details */}
      <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">📍 Address</h3>
          <p className="text-gray-600 mt-2">123 Goshala Road, Village Name, City, India</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">📞 Phone</h3>
          <p className="text-gray-600 mt-2">+91 98765 43210</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">✉️ Email</h3>
          <p className="text-gray-600 mt-2">support@goshala.org</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Send Us a Message</h2>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              rows={4}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </Layout>
  )
}

export default Contact